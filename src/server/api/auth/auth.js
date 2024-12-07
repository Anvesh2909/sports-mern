import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../database/models/user.js";
import dotenv from "dotenv";
import connectDB from "../../database/dbconfig.js";
dotenv.config();
connectDB();

const router = express.Router();

const generateToken = (payload, secret, expiresIn = "1d") => {
    return jwt.sign(payload, secret, { expiresIn });
};

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized, no token found" });
    }

    try {
        const decoded = jwt.verify(token, "secreet");
        req.user = decoded;
        next();
    } catch (err) {
        res.clearCookie("token");
        return res.status(401).json({ message: "Unauthorized, invalid token" });
    }
};

router.post("/signup", async (req, res) => {
    try {
        const { username, email, password} = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        const token = generateToken({ id: newUser._id }, "secreet");
        res.cookie("token", token, { httpOnly: true, secure: false });
        return res.status(201).json({ message: "Signup successful", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = generateToken({ id: user._id }, "secreet");
        res.cookie("token", token, { httpOnly: true, secure: false });
        return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/home", verifyToken, (req, res) => {
    return res.status(200).json({
        message: "Welcome to Home",
        userId: req.user.id,
    });
});

router.get("/profile", verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            username: user.username,
            email: user.email,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
});

export default router;
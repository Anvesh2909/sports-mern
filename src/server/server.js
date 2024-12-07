import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/dbconfig.js";
import authRoutes from "../server/api/auth/auth.js"
import eventController from "./api/eventsCRUD/eventController.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ['http://localhost:5173'],
  methods: 'GET,POST',
  credentials: true
}));
app.use("/api/auth", authRoutes);
app.use("/api/events", eventController);
const PORT =  5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
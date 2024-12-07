import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.jsx";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });

            // Simulate login data
            const mockUser = {
                name: "John Doe",
                email: email,
                createdAt: "2024-12-01T10:00:00",
            };

            localStorage.setItem("token", response.data.token);
            const profilePictureUrl = response.data.profilePicture || null;
            login(profilePictureUrl);

            // Navigate to profile with user data
            navigate("/profile", { state: { user: mockUser } });
        } catch (err) {
            setError("Invalid credentials or server error");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded"
                    >
                        Login
                    </button>
                    <div className="flex justify-between p-5  text-gray-600 text-sm">
                        <p>Don’t have an account?</p>
                        <a
                            href="/signup"
                            className="text-primary-500 hover:text-primary-600 transition"
                        >
                            Sign Up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

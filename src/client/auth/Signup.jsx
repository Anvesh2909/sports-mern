import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.jsx";

const Signup = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            console.log(formData);
            const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
            console.log(axios.defaults.headers);
            const profilePictureUrl = response.data.profilePicture || null;
            login(profilePictureUrl);
            navigate("/");
        } catch (err) {
            if (err.response.status === 400) {
                setError(err.response.data.message);
            } else {
                setError("Signup failed. Please try again.");
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
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
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded"
                    >
                        Sign Up
                    </button>
                    <div className="flex justify-between p-5  text-gray-600 text-sm">
                        <p>Already have an account?</p>
                        <a
                            href="/login"
                            className="text-primary-500 hover:text-primary-600 transition"
                        >
                            Login
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
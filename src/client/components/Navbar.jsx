import React, { useContext, useState } from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { isLoggedIn, profilePic, logout } = useContext(AuthContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="bg-white m-5">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <img src="/assets/images/logo.svg" alt="Logo" className="h-8" />

                <ul className={`flex gap-20 ${isLoggedIn ? "block" : "hidden"}`}>
                    <li>
                        <a href="/" className="hover:text-blue-600">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/create-event" className="hover:text-blue-600">
                            Create Event
                        </a>
                    </li>
                    <li>
                        <a href="/profile" className="hover:text-blue-600">
                            My Profile
                        </a>
                    </li>
                </ul>

                {isLoggedIn ? (
                    <div className="relative flex items-center gap-4">
                        <div
                            className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 cursor-pointer"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <img
                                src={profilePic || "https://via.placeholder.com/40"}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {showDropdown && (
                            <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md">
                                <button
                                    onClick={logout}
                                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        className="text-white bg-[#725EF6] hover:bg-violet-700 py-2 px-6 rounded-full"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

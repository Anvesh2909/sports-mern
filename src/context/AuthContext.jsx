import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profilePic, setProfilePic] = useState(null);

    const login = (profilePictureUrl) => {
        setIsLoggedIn(true);
        setProfilePic(profilePictureUrl || "https://via.placeholder.com/40");
    };

    const logout = () => {
        setIsLoggedIn(false);
        setProfilePic(null);
        localStorage.removeItem("token"); // Clear token
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, profilePic, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

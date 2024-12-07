import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./client/components/Landing.jsx";
import Login from "./client/auth/Login.jsx";
import Signup from "./client/auth/Signup.jsx";
import Profile from "./client/components/Profile.jsx";
import EventCard from "./client/components/EventCard.jsx";
import CreateEvent from "./client/components/CreateEvent.jsx";

const App = () => {
    const events = [
        {
            _id: "1",
            imageUrl: "/assets/images/sp-2.jpg",
            title: "Marathon Championship",
            startDateTime: "2024-12-15T09:00:00",
            isFree: false,
            price: 2500,
            category: { name: "Sports" },
            organizer: { firstName: "John", lastName: "Doe", _id: "123" },
        },
        {
            _id: "2",
            imageUrl: "/assets/images/sp-3.jpeg",
            title: "Football Finals",
            startDateTime: "2024-12-20T18:00:00",
            isFree: true,
            price: 0,
            category: { name: "Football" },
            organizer: { firstName: "Alice", lastName: "Smith", _id: "124" },
        },
        {
            _id: "3",
            imageUrl: "/assets/images/sp-1.webp",
            title: "Soccer Challenge",
            startDateTime: "2024-12-25T07:30:00",
            isFree: false,
            price: 1500,
            category: { name: "Soccer" },
            organizer: { firstName: "Bob", lastName: "Johnson", _id: "125" },
        },
    ];

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/event/:id" element={<EventCard events={events} />} />
                <Route path="/create-event" element={<CreateEvent />} />
            </Routes>
        </Router>
    );
};

export default App;

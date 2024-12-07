import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CreateEvent() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        startDateTime: '',
        isFree: false,
        price: 0,
        category: '',
        organizer: '',
    });
   const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/events/create", formData);
            console.log(response.data); // Success message and created event
            // Handle successful event creation (e.g., clear form, redirect)
            alert('Event created successfully!');
            // Clear form data
            setFormData({
                title: '',
                description: '',
                imageUrl: '',
                startDateTime: '',
                isFree: false,
                price: 0,
                category: '',
                organizer: '',
            });
            navigate('/');
        } catch (error) {
            console.error(error);
            // Handle errors (e.g., display error message to user)
            alert('Error creating event. Please try again.');
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Create Event</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="title" className="block text-lg font-medium mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Event Title"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block text-lg font-medium mb-2">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Event Description"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="imageUrl" className="block text-lg font-medium mb-2">
                        Image URL (Optional)
                    </label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder="Enter image URL here"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="startDateTime" className="block text-lg font-medium mb-2">
                        Start Date & Time
                    </label>
                    <input
                        type="datetime-local"
                        name="startDateTime"
                        value={formData.startDateTime}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-lg font-medium mb-2">Event Type</label>
                    <div className="flex items-center mb-3">
                        <input
                            type="radio"
                            id="free"
                            name="isFree"
                            value={true}
                            checked={formData.isFree}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="free">Free</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="paid"
                            name="isFree"
                            value={false}
                            checked={!formData.isFree}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="paid">Paid</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Price"
                            className="w-24 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            disabled={formData.isFree}
                        />
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="category" className="block text-lg font-medium mb-2">
                        Category
                    </label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Event Category"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="organizer" className="block text-lg font-medium mb-2">
                        Organizer
                    </label>
                    <input
                        type="text"
                        name="organizer"
                        value={formData.organizer}
                        onChange={handleChange}
                        placeholder="Event Organizer"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Create Event
                </button>
            </form>
        </div>
    );
}

export default CreateEvent;
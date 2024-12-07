import React from 'react';
import { useParams } from 'react-router-dom';

const EventCard = ({ events }) => {
    const { id } = useParams(); // Get the event ID from the URL

    // Find the event with the matching ID
    const event = events.find((event) => event._id === id);

    if (!event) {
        return <div>Event not found.</div>;
    }

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
            <img
                src={event.imageUrl || '/assets/default-event.jpg'}
                alt={event.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 mb-4">
                {new Date(event.startDateTime).toLocaleString()}
            </p>
            <p className="text-gray-700 mb-4">{event.description || 'No description available.'}</p>

            {/* Buy Tickets Button */}
            {!event.isFree && (
                <div className="mt-5">
                    <a
                        href={`/buy-tickets/${event._id}`} // Replace with your ticket buying URL logic
                        className="px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition"
                    >
                        Buy Tickets
                    </a>
                </div>
            )}
        </div>
    );
};

export default EventCard;
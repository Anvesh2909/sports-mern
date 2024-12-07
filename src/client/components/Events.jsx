import React from 'react';
import EventsCard from './EventsCard';

const Events = ({ filteredEvents, loading, error }) => {
    if (loading) {
        return <p>Loading events...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <section className="m-5">
            <div className="container mx-auto px-4 mb-5">
                <h2 className="text-4xl font-bold mb-8 text-center">Search Results</h2>
                {filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filteredEvents.map((event) => (
                            <Link to={`/event/${event._id}`} key={event._id}>
                                <EventsCard event={event} hasOrderLink={false} hidePrice={false} />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-center">No events found</p>
                )}
            </div>
        </section>
    );
};

export default Events;

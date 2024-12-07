import { Link } from 'react-router-dom'; // Import Link from React Router
import PropTypes from 'prop-types'; // Import PropTypes for type checking

const EventsCard = ({
                        event,
                        hasOrderLink = false,
                        hidePrice = false,
                        loggedInUserId = "123" // Default value for demo purposes
                    }) => {

    return (
        <Link
            to={`/event/${event._id}`}
            className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]"
        >
            {/* Event Image */}
            <div
                style={{ backgroundImage: `url(${event.imageUrl || '/assets/default-event.jpg'})` }}
                className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
            ></div>

            {/* Event Details */}
            <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
                {/* Price and Category */}
                {!hidePrice && (
                    <div className="flex gap-2">
                        <span className={`p-semibold-14 w-min rounded-full px-4 py-1 ${event.isFree ? 'bg-green-100 text-green-60' : 'bg-red-100 text-red-60'}`}>
                            {event.isFree ? 'FREE' : `₹${event.price}`}
                        </span>
                        <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
                            {event.category?.name || "Uncategorized"}
                        </p>
                    </div>
                )}

                {/* Event Date and Title */}
                <p className="p-medium-16 p-medium-18 text-grey-500">
                    {new Date(event.startDateTime).toLocaleString()}
                </p>
                <h3 className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
                    {event.title}
                </h3>

                {/* Organizer and Order Link */}
                <div className="flex justify-between items-center w-full">
                    <p className="p-medium-14 md:p-medium-16 text-grey-600">
                        {event.organizer?.firstName || "Unknown"} {event.organizer?.lastName || ""}
                    </p>
                    {hasOrderLink && (
                        <button
                            onClick={(e) => {
                                e.preventDefault(); // Prevent link navigation
                                alert("Order details coming soon!"); // Replace with your logic
                            }}
                            className="flex items-center gap-2 text-primary-500"
                        >
                            <span>Order Details</span>
                            <img src="/assets/icons/arrow.svg" alt="arrow" width={10} height={10} />
                        </button>
                    )}
                </div>
            </div>
        </Link>
    );
};

// Define PropTypes
EventsCard.propTypes = {
    event: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        startDateTime: PropTypes.string.isRequired,
        isFree: PropTypes.bool.isRequired,
        price: PropTypes.number,
        category: PropTypes.shape({
            name: PropTypes.string,
        }),
        organizer: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
        }),
    }).isRequired,
    hasOrderLink: PropTypes.bool,
    hidePrice: PropTypes.bool,
    loggedInUserId: PropTypes.string, // User ID of the logged-in user
};

export default EventsCard;

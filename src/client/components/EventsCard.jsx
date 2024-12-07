
const EventsCard = ({ event, hasOrderLink = false, hidePrice = false }) => {
    const userId = '123'; // Replace this with your logic for fetching the logged-in user ID
    const isEventCreator = userId === event.organizer._id;

    return (
        <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
            <div
                style={{ backgroundImage: `url(${event.imageUrl})` }}
                className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
            ></div>


            <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
                {!hidePrice && (
                    <div className="flex gap-2">
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
              {event.isFree ? 'FREE' : `₹${event.price}`}
            </span>
                        <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
                            {event.category.name}
                        </p>
                    </div>
                )}

                <p className="p-medium-16 p-medium-18 text-grey-500">
                    {new Date(event.startDateTime).toLocaleString()}
                </p>

                <h3 className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.title}</h3>

                <div className="flex justify-between w-full">
                    <p className="p-medium-14 md:p-medium-16 text-grey-600">
                        {event.organizer.firstName} {event.organizer.lastName}
                    </p>

                    {hasOrderLink && (
                        <button className="flex gap-2">
                            <p className="text-primary-500">Order Details</p>
                            <img src="/assets/icons/arrow.svg" alt="arrow" width={10} height={10} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventsCard;

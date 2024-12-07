
const TopMatchesCard = ({ match }) => {
    return (
        <div className="group relative flex w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
            <div
                style={{ backgroundImage: `url(${match.image})` }}
                className="w-full h-48 bg-cover bg-center rounded-t-xl"
            ></div>

            <div className="flex flex-col p-5 gap-4">
                <h3 className="text-xl font-semibold text-black">{match.name}</h3>
                <p className="text-gray-600">Score: {match.score}</p>
                <button className="text-white bg-[#725EF6] hover:bg-violet-700 py-2 px-4 rounded-full">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default TopMatchesCard;

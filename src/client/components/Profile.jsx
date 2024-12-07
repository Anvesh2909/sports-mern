import { useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const user = location.state?.user;

    if (!user) {
        return (
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg max-w-md mx-auto">
                <h1 className="text-2xl font-bold text-center mb-4">No User Found</h1>
                <p className="text-center">Please log in to view your profile.</p>
                <button
                    onClick={() => navigate("/login")}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Go to Login
                </button>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-center mb-4">Profile</h1>
            <div className="flex flex-col gap-4">
                <div className="flex items-center">
                    <span className="font-semibold w-32">Name:</span>
                    <span>{user.name}</span>
                </div>
                <div className="flex items-center">
                    <span className="font-semibold w-32">Email:</span>
                    <span>{user.email}</span>
                </div>
                <div className="flex items-center">
                    <span className="font-semibold w-32">Joined:</span>
                    <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;

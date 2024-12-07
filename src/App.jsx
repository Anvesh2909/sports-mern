import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './client/components/Landing.jsx';
import Login from "./client/auth/Login.jsx";
import Signup from "./client/auth/Signup.jsx";
const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

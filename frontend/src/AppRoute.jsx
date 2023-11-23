import { NotificationContainer } from "react-notifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './css/index.css';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Landing from "./pages/landingPage";
import LoginWorker from "./pages/LoginWorker";
import SignupWorker from "./pages/SignupWorker";
import HomeClient from "./pages/HomeClient";
import HomeWorker from "./pages/HomeWorker";
import Services from "./pages/services";
import Plans from "./pages/plans";
import Profile from "./pages/profile";
import Questions from "./pages/Questions";
import HistoryClient from "./pages/HistoryWorkers";
import FavoritosPage from "./pages/FavoritosPage";
import MessageClient from "./pages/MessageClient";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<Signup/>} />
                <Route path="/loginWorker" element={<LoginWorker/>} />
                <Route path="/signupWorker" element={<SignupWorker/>} />
                <Route path="/homeClient" element={<HomeClient/>}/>
                <Route path="/homeWorker" element={<HomeWorker/>}/>
                <Route path="/services" element={<Services/>} />
                <Route path="/plans" element={<Plans/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/questions" element={<Questions/>} />
                <Route path="/historyWorkers" element={<HistoryClient/>} />
                <Route path="/favoritosWorkers" element={<FavoritosPage/>} />
                <Route path="/messageClient" element={<MessageClient/>} />
            </Routes>
            <NotificationContainer />
        </BrowserRouter>
    );
}
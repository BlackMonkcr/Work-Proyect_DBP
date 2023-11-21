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

//Comentario

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
            </Routes>
            <NotificationContainer />
        </BrowserRouter>
    );
}
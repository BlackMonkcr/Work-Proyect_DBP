import React from "react";
import { NotificationContainer } from "react-notifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './css/index.css';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Landing from "./pages/landingPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<Signup/>} />
            </Routes>
            <NotificationContainer />
        </BrowserRouter>
    );
};
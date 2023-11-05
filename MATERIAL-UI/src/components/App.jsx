import React from "react";
import { NotificationContainer } from "react-notifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../pages/loginPage";
import { Landing } from "../pages/landingPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <NotificationContainer />
        </BrowserRouter>
    );
};
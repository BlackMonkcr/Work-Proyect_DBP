import React from "react";

function NavBarInfo({ title }) {
    return (
        <nav className="navbar navbar-light bg-light justify-content-center fixed-top">
            <span className="navbar-brand mb-0 h fs-3 texto-dark ">{title}</span>
        </nav>
    );
}

export default NavBarInfo;

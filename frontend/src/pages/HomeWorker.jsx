import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/Home.css";
import { MainCardHome } from "../components/mainCardHome";

import NavBarInfo from "../components/NavBarInfo";
import NavBarWorker from "../components/navbarWorker";
//import { ProfileWorker } from "../components/profileWorker";
//import NavbarLateral from "../components/NavbarLateral";
import NavPlanApp from "../components/navPlanApp";


function HomeWorker() {
    // Get the 3 first users from the database
    const [users, setUsers] = useState([]);

    useEffect(() => { //No funciona por los CORS
        Axios({
            method: "GET",
            baseURL: "http://work.up.railway.app/",
            url: "client/favorite_workers?id=1&limit=3",
        })
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.log("Error: " + error.message);
        });
    }, [setUsers]);

    /*--------------------------RETURN COMPONENT--------------------------*/

    return (
        <>
            <NavBarInfo title="Home Worker" />
            <NavBarWorker/>
            <div className="worker-highlight py-0 modificacion-worked mt-5">
                <div className="container ">
                    <div className="row ">
                        <div className="col-12 mt-5">
                            <MainCardHome title="Trabajador Destacado de la semana" subtitle="Frankie Ruiz" body="San Borja 4.9" description="Descripción sobre el trabajador" />
                            <MainCardHome title="Trabajador Destacado de la semana" subtitle="Frankie Ruiz" body="San Borja 4.9" description="Descripción sobre el trabajador" />
                        </div>
                    </div>
                </div>
            </div>
            
            <NavPlanApp/>
        </>
    );
}

export default HomeWorker;

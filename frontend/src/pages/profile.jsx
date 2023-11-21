import React, { useState, useEffect } from "react";
import "../css/Forms.css";
import Axios from "axios";
import NavBarInfo from "../components/NavBarInfo";
import NavBarWorker from "../components/navbarWorker";
import NavPlanApp from "../components/navPlanApp";
import { ProfileWorker } from "../components/profileWorker";

function Profile() {

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
      
    return (
        <>
            <NavBarInfo title="Home Worker" />
            <NavBarWorker/>
            <div className="worker-highlight py-2 modificacion-worked mt-0">
                <div className="container mt-4">
                    <div className="row">
                    <div className="col-12 p-5">
                            <h2 className="fs-3 text-center fst-italic">Mi perfil</h2>
                        </div >
                            <div className="col-12 ">
                                <ProfileWorker 
                                name={"Frank Rodriguez"} 
                                description={"Descripcion del Plan Gold" }
                                email={"micorreo@hola.com"} 
                                occupation={"Plomero"}
                                imageUrl={"src\\img\\image1.jpeg"}/>
                            </div>
                    </div>
                </div>
            </div>
            <NavPlanApp/>
        </>
    );
}

export default Profile;
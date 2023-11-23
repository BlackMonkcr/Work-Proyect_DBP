import React, { useState, useEffect } from "react";
import "../css/Forms.css";
import Axios from "axios";
import NavBarInfo from "../components/NavBarInfo";
import NavBarWorker from "../components/navbarWorker";
import { PlanCard } from "../components/planCard";
import NavPlanApp from "../components/navPlanApp";

function Plans() {

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
            <div className="worker-highlight py-0 modificacion-worked mt-5">
                <div className="container h-100">
                    <div className="row h-75 justify-content-center align-content-center">
                        <div className="col-12 ">
                            <h2 className="fs-3 mt-5 text-center fst-italic"></h2>
                        </div >
                        <div className="mt-5 p-5">
                        <div className="col-12 "  >
                            <PlanCard name={"PLAN FREE"} description={"Descripcion del Plan Free"} price={"0.99"}  />
                        </div>
                        <div className="col-12 ">
                            <PlanCard name={"PLAN PRO"} description={"Descripcion del Plan Pro"} price={"9.99"}/>
                        </div>
                        <div className="col-12 ">
                            <PlanCard name={"PLAN GOLDEN"} description={"Descripcion del Plan Gold"} price={"14.99"}/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavPlanApp/>
        </>
    );
}

export default Plans;
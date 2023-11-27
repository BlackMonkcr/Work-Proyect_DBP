import React, { useState, useEffect } from "react";
import "../css/Home.css";

import MainCardHomeWorkerr from "../components/mainCardHomeWorker";
import NavBarInfo from "../components/NavBarInfo";
import NavBarWorker from "../components/navbarWorker";
//import { ProfileWorker } from "../components/profileWorker";
//import NavbarLateral from "../components/NavbarLateral";
import NavPlanApp from "../components/navPlanApp";


function HomeWorker() {
    // Get the 3 first users from the database
    const [workers, setWorkers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);   
            const response = await fetch('https://work.up.railway.app/api/v1/worker/homeCards?limit=10', {
                method: 'GET',
            });
            const data = await response.json();
            setWorkers(data.workers);
            setLoading(false);
        } catch (error) {
          console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    /*--------------------------RETURN COMPONENT--------------------------*/

    return (
        <>
            <NavBarInfo title="Home Worker" />
            <NavBarWorker/>
            <div className="worker-highlight py-0 modificacion-worked mt-5">
                <div className="container ">
                    <div className="row ">
                        <div className="col-12 mt-5">
                            {workers.map((worker) => (
                                <MainCardHomeWorkerr
                                    key={worker.id}
                                    id={worker.id}
                                    name={worker.name}
                                    occupation={worker.occupation}
                                    description={worker.description}
                                    keyProfilePicture={worker.keyProfilePicture}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <NavPlanApp/>
        </>
    );
}

export default HomeWorker;

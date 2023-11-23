import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/Home.css";
import NavBar from "../components/NavBar";
import NavWorkersPreview from "../components/NavWorkersPreview";
import NavBarInfo from "../components/NavBarInfo";
import WorkerClientHighlight from "../components/WorkerClientHighlight";
import MainCardHomeWorker from "../components/mainCardHome-worker"; // Importa el componente de trabajador

function HomeClient() {
    const [users, setUsers] = useState([]);
    const [highlightedWorker, setHighlightedWorker] = useState(null);
    const [recommendedWorkers, setRecommendedWorkers] = useState([]); // Nuevo estado para los trabajadores recomendados

    useEffect(() => {
        Axios({
            method: "GET",
            baseURL: "http://work.up.railway.app/",
            url: "client/favorite_workers?id=1&limit=3",
        })
            .then((response) => {
                setUsers(response.data);
                if (response.data.length > 0) {
                    setHighlightedWorker(response.data[0]);
                }
            })
            .catch((error) => {
                console.log(error);
            });

        // Lógica para obtener los trabajadores recomendados
        // Por ejemplo, podrías utilizar una llamada a la API similar a la de HomeWorker
        // Aquí incluirías la lógica para obtener los trabajadores recomendados y actualizar el estado `recommendedWorkers`
        // Ejemplo ficticio:
        Axios.get("https://work.up.railway.app/api/v1/worker/homeCards?limit=10")
            .then((response) => {
                setRecommendedWorkers(response.data.workers);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <NavBar />
            <WorkerClientHighlight worker={highlightedWorker} />
            <NavWorkersPreview favoriteWorkers={users} historyWorkers={users} />
            
            {/* Mostrar los trabajadores recomendados debajo del componente de trabajador destacado */}
            <div className="recommended-workers">
                {recommendedWorkers.map((worker) => (
                    <MainCardHomeWorker
                        key={worker.id}
                        id={worker.id}
                        name={worker.name}
                        occupation={worker.occupation}
                        description={worker.description}
                        keyProfilePicture={worker.keyProfilePicture}
                    />
                ))}
            </div>

            <NavBarInfo title="Home Client" />
        </>
    );
}

export default HomeClient;

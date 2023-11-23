import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/Home.css";
import NavBar from "../components/NavBar";
import NavWorkersPreview from "../components/NavWorkersPreview";
import NavBarInfo from "../components/NavBarInfo";
import WorkerCards from "../components/WorkerCards"; // Importa el componente WorkerCards

function HistoryClient() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Axios({
            method: "GET",
            baseURL: "http://work.up.railway.app/",
            url: "client/favorite_workers?id=1&limit=3",
        })
            .then((response) => {
                setUsers(response.data);
                // Establecer el primer trabajador como destacado (aquí puedes ajustar la lógica según tus necesidades)
                if (response.data.length > 0) {
                    setHighlightedWorker(response.data[0]);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setUsers]);

    return (
        <>
            <NavBar />
            <NavWorkersPreview favoriteWorkers={users} historyWorkers={users} />
            <NavBarInfo title="Home Client" />
            {/* Integra el componente WorkerCards aquí para mostrar las tarjetas */}
            <WorkerCards />
        </>
    );
}

export default HistoryClient;


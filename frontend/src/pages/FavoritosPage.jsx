import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import NavWorkersPreview from "../components/NavWorkersPreview";
import NavBarInfo from "../components/NavBarInfo";
import CardFavoritos from "../components/CardFavoritos";

function FavoritosPage() {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://work.up.railway.app/api/v1/client/favorite_workers?id=1&limit=8');
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }
            const data = await response.json();
            setUsers(data);
            // Establecer el primer trabajador como destacado (puedes ajustar la lógica según tus necesidades)
            if (data.length > 0) {
                setHighlightedWorker(data[0]);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <NavBar />
            <NavWorkersPreview favoriteWorkers={users} historyWorkers={users} />
            <NavBarInfo title="Home Client" />
            {/* Integra el componente CardFavoritos aquí para mostrar las tarjetas */}
            <CardFavoritos />
        </>
    );
}

export default FavoritosPage;



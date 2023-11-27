import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import NavWorkersPreview from "../components/NavWorkersPreview";
import NavBarInfo from "../components/NavBarInfo";
import CardsMessages from "../components/CardsMessages";

function MessageClient() {
    const [favoriteWorkers, setFavoriteWorkers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://work.up.railway.app/api/v1/client/perfil?email=${username}", {
                    method: "GET"
                });

                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.statusText}`);
                }

                const data = await response.json();
                setFavoriteWorkers(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    const openWhatsApp = (phoneNumber) => {
        window.open(`https://web.whatsapp.com/send?phone=+51${phoneNumber}`, '_blank');
    };

    return (
        <>
            <NavBar />
            <NavWorkersPreview favoriteWorkers={favoriteWorkers} historyWorkers={favoriteWorkers} />
            <NavBarInfo title="Home Client" />
            <CardsMessages favoriteWorkers={favoriteWorkers} openWhatsApp={openWhatsApp} />
        </>
    );
}

export default MessageClient;




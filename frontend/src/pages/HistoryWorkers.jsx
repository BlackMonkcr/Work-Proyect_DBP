import React, { useState, useEffect } from "react";
import WorkerCardHistory from '../components/WorkerCards'; // Asegúrate de tener este componente o ajusta la ruta correctamente

function HistoryClient() {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [clientData, setClientData] = useState({});
    const [username, setUsername] = useState(''); // Asegúrate de tener el username necesario o cámbialo por una variable válida

    const colors = ['#3837F5', '#3672F5', '#36AAB5', '#7436F5'];

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://work.up.railway.app/api/v1/client/perfil?email=${username}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }

            const data = await response.json();
            setClientData(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchHistory = async () => {
        try {
            const response = await fetch(`https://work.up.railway.app/api/v1/client/history_workers/all?id=${clientData.id}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }

            const data = await response.json();
            setHistory(data.workers);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [username]); // Asegúrate de tener un cambio que actualice el username para que el useEffect se dispare

    useEffect(() => {
        if (!loading) {
            fetchHistory();
        }
    }, [loading]);

    return (
        <div>
            {/* Aquí va el título u otros elementos visuales */}
            {history.map((worker, index) => (
                <WorkerCardHistory
                    key={worker.id}
                    id={worker.id}
                    name={worker.name}
                    occupation={worker.occupation}
                    phone={worker.phone}
                    color={colors[index % colors.length]}
                    keyProfilePicture={worker.keyProfilePicture}
                />
            ))}
        </div>
    );
}

export default HistoryClient;


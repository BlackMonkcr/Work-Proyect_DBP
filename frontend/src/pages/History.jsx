import React, { useState, useEffect } from "react";
import MainCardHomeWorker from "../components/mainCardHome-worker";
import NavBarInfo from "../components/NavBarInfo";
import NavBar from "../components/NavBar";

function History() {
    const [workers, setWorkers] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://work.up.railway.app/api/v1/worker/homeCards?limit=10', {
                method: 'GET',
            });
            const data = await response.json();
            setWorkers(data.workers);
        } catch (error) {
            console.error(error);
        }
    };

    const addToFavorites = (workerId) => {
        const workerToAdd = workers.find(worker => worker.id === workerId);
        setFavorites([...favorites, workerToAdd]);
        localStorage.setItem(`worker_${workerId}`, JSON.stringify(workerToAdd));
    };

    const removeFromFavorites = (workerId) => {
        const updatedFavorites = favorites.filter(favorite => favorite.id !== workerId);
        setFavorites(updatedFavorites);
        localStorage.removeItem(`worker_${workerId}`);
    };

    return (
        <>
            <NavBarInfo title="Historial" />
            <NavBar />
            <div className="worker-highlight py-0 modificacion-worked mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5">
                            {workers.map((worker) => (
                                <div key={worker.id}>
                                    <MainCardHomeWorker
                                        id={worker.id}
                                        name={worker.name}
                                        occupation={worker.occupation}
                                        description={worker.description}
                                        keyProfilePicture={worker.keyProfilePicture}
                                        isFavorite={favorites.some(favorite => favorite.id === worker.id)}
                                        handleOnClick={() => {
                                            if (favorites.some(favorite => favorite.id === worker.id)) {
                                                removeFromFavorites(worker.id);
                                            } else {
                                                addToFavorites(worker.id);
                                            }
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default History;






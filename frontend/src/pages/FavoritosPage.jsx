import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import NavBarInfo from "../components/NavBarInfo";
import MainCardHomeWorker from "../components/mainCardHome-worker";

function FavoritosPage() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.includes('worker_')) {
                const worker = JSON.parse(localStorage.getItem(key));
                storedFavorites.push(worker);
            }
        }
        setFavorites(storedFavorites);
    }, []);

    const removeFromFavorites = (workerId) => {
        const updatedFavorites = favorites.filter(favorite => favorite.id !== workerId);
        setFavorites(updatedFavorites);
        localStorage.removeItem(`worker_${workerId}`);
    };

    return (
        <>
            <NavBar />
            <NavBarInfo title="Favoritos" />
            <div className="worker-highlight py-0 modificacion-worked mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5">
                            {favorites.map((worker) => (
                                <div key={worker.id}>
                                    <MainCardHomeWorker
                                        id={worker.id}
                                        name={worker.name}
                                        occupation={worker.occupation}
                                        description={worker.description}
                                        keyProfilePicture={worker.keyProfilePicture}
                                    />
                                    <button onClick={() => removeFromFavorites(worker.id)}>Quitar de Favoritos</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FavoritosPage;








import React from "react";
import { MainCardHome } from "./mainCardHome";

function WorkerClientHighlight ({ worker }) {
    if (!worker) {
        return (
            <div className="worker-highlight py-0 modificacion-worked mt-5">
                <div className="container ">
                    <div className="row ">
                        <div className="col-12 mt-5">
                            <MainCardHome
                                title={"Trabajador Destacado de la semana"}
                                subtitle={"Frankie Ruiz"}
                                body={"San Borja 4.9"}
                                description={"Descripción sobre el trabajador"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="worker-highlight">
            <h2>Trabajador Destacado</h2>
            <div className="highlighted-worker">
                <img src={worker.avatar} alt={worker.name} />
                <div className="worker-details">
                    <h3>{worker.name}</h3>
                    <p>{worker.description}</p>
                </div>
            </div>
        </div>
    );
}

export default WorkerClientHighlight;

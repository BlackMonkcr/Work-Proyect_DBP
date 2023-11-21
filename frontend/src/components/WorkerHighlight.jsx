import React from "react";
import { CardHome } from "./CardHome";
import { MainCardHome } from "./mainCardHome";

function WorkerHighlight({ worker }) {
    if (!worker) {
        return (
            <div className="worker-highlight py-0 modificacion-worked mt-5">
                <div className="container ">
                    <div className="row ">
                        <div className="col-12 mt-5">
                            <MainCardHome title={"Trabajador Destacado de la semana"} subtitle={"Frankie Ruiz"} body={"San Borja 4.9"} description={"Descripción sobre el trabajador"} />
                        </div>
                        <div className="col-12">
                            <h2 className="text-center my-1">Sugeridos</h2>
                        </div>
                        <div className="col-12">
                            <div className="container">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-6">
                                        <CardHome services={false} title={"Manuel Tafur"} body={"Chorillos 3.9 "} image={"src\\img\\image1.jpeg"} />
                                    </div>
                                    <div className="col-6">
                                        <CardHome services={false} title={"Luis Romero"} body={"Chorillos 3.5 "} image={"src\\img\\image2.jpeg"} />
                                    </div>
                                    <div className="col-6">
                                        <CardHome services={false} title={"Brando Carrea"} body={"Chorillos 3.3 "} image={"src\\img\\image3.jpeg"} />
                                    </div>
                                    <div className="col-6">
                                        <CardHome services={false} title={"Francisco Perez"} body={"Chorillos 3.3"} image={"src\\img\\image4.jpeg"} />
                                    </div>
                                </div>
                            </div>
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

            <h2>Trabajadores Sugeridos</h2>
            <div className="suggested-workers">
                {/* Aquí puedes mostrar una lista de trabajadores sugeridos */}
            </div>
        </div>
    );
}

export default WorkerHighlight;

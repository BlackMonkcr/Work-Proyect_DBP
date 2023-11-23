import React, { useState, useEffect } from "react";
import "../css/Forms.css";
import Axios from "axios";
import { CardHome } from "../components/CardHome";
import NavBarInfo from "../components/NavBarInfo";
import NavBarWorker from "../components/navbarWorker";
import NavPlanApp from "../components/navPlanApp";


function Services() {

    const [users, setUsers] = useState([]);

    useEffect(() => { //No funciona por los CORS
        Axios({
            method: "GET",
            baseURL: "http://work.up.railway.app/",
            url: "client/favorite_workers?id=1&limit=3",
        })
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.log("Error: " + error.message);
        });
    }, [setUsers]);

    const profesiones = [
        {
            nombre: "Maestro",
            salario: 3500,
            descripcion: "Educador en instituciones educativas."
        },
        {
            nombre: "Ingeniero",
            salario: 3500,
            descripcion: "Profesional en ingeniería y desarrollo de proyectos."
        },
        {
            nombre: "Doctor",
            salario: 3500,
            descripcion: "Profesional de la salud con grado de doctor."
        },
        {
            nombre: "Diseñador",
            salario: 3500,
            descripcion: "Creador visual de soluciones creativas y estéticas."
        }
    ];
      

    return (
        <>
            <NavBarInfo title="Home Worker" />
            <NavBarWorker/>
            <div className="worker-highlight py-0 modificacion-worked mt-5">
                <div className="container h-100">
                    <div className="row h-75 justify-content-center align-content-center">
                        <div className="col-12">
                            <h3 className="fs-3 mt-5 text-center fst-italic">Servicios del trabajador</h3>
                        </div>
                        {profesiones.map((profesion, index) => (
                            <div className="col-6">
                                <CardHome 
                                    title={ profesion.nombre }
                                    body={ profesion.descripcion }
                                    image={ null } 
                                    salario={ profesion.salario }
                                    services={true}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <NavPlanApp/>
        </>
    );
}

export default Services;
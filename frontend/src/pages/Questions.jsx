import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/Home.css";
import NavPlanApp from "../components/navPlanApp";
import NavBarInfo from "../components/NavBarInfo";
import NavBarWorker from "../components/navbarWorker";
import AccordionItem from "../components/accordionItem";

import CardLateral from "../components/cardLateral";

function Questions() {
    // Get the 3 first users from the database
    const [users, setUsers] = useState([]);

    const preguntasRespuestas = [
        {
          question: "¿Cómo funciona el proceso de emparejamiento en la plataforma?",
          answer: "Nuestra plataforma utiliza un algoritmo avanzado que analiza las habilidades, la experiencia y las preferencias de los trabajadores para encontrar el mejor ajuste con los requisitos del cliente."
        },
        {
          question: "¿Cuánto tiempo suele tomar el proceso de emparejamiento?",
          answer: "El tiempo puede variar según la complejidad de los requisitos y la disponibilidad de trabajadores. Sin embargo, nos esforzamos por realizar emparejamientos eficientes en el menor tiempo posible."
        },
        {
          question: "¿Cómo garantizan la calidad de los trabajadores en la plataforma?",
          answer: "Realizamos un proceso de verificación exhaustivo que incluye la revisión de antecedentes, la verificación de habilidades y la recopilación de reseñas de trabajos anteriores. Esto nos ayuda a garantizar la calidad y confiabilidad de los trabajadores en nuestra plataforma."
        }
        
    ];  

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

    /*--------------------------RETURN COMPONENT--------------------------*/

    return (
        <>
            <NavBarInfo title="Home Worker" />
            <NavBarWorker/>
            <div className="worker-highlight py-0 modificacion-worked mt-5">
                <div className="container ">
                    <div className="row ">
                        <div className="col-12 mt-5">
                            <div className="accordion" id="accordionExample">
                                {preguntasRespuestas.map((item, index) => (
                                    <AccordionItem question={item.question} answer={item.answer} cont={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-5">
                        <CardLateral />
                        </div>
                </div>
            </div>
            <NavPlanApp/>
            
        </>
    );
}

export default Questions;
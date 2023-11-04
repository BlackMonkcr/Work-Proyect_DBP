import React, { useState } from "react";
import { Form } from "../components/login/form.js";
import { NavBar } from "../components/navbar/navbar";
const fields = [
    {key: "username",name: "username",label: "Usuario",prop: { type: "text" } },
    {key: "password",name: "password",label: "Contraseña",prop: { type: "password" } }
];

export const Login = () => {

    const [data, setData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    }; 

    const handleUser = async (e) => {
        e.preventDefault();
        //const errors = await api_login(fields, data); Aqui se haria la llamada al backend pasando los datos
        /*if (!checkErrors(errors)){
            NotificationManager.success("Redirigiendo...", "Logeo exitoso", 2000);
            setTimeout(() => navigate("/dashboard"), 2000);
        }*/
    };

    return (
        <main className="maxHeight">
            <NavBar/>
            <div className="contenedor container-center flex-row">
                <section className="col-10 col-lg-6 bg-light p-3 text-dark max-height d-flex flex-column align-items-center justify-content-center">
                    <Form fields={fields} handleSubmit={handleUser} handleInputChange={handleInputChange} title={"Iniciar de Sesión"} />
                </section>
                <section className="col-10 col-lg-6 bg-login p-3 max-height d-flex flex-column align-items-center justify-content-center">
                    <h1 className="text-light titulo animate__animated animate__fadeIn animate__slow">
                        Te damos la bienvenida
                    </h1>
                    <h3 className="text-light subtitulo animate__animated animate__fadeIn animate__delay-2s">
                        ¿Eres nuevo?
                    </h3>
                    <a className="btn btn-outline-light w-100 my-3" href="/register">
                        Registrate
                    </a>
                </section>
            </div>
        </main> 
    )
};
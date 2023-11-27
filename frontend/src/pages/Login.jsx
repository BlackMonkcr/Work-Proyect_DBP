import React, { useState } from "react";
import HomeCliente from "./HomeClient";
import "../css/Forms.css";
import HomeWorker from "./HomeWorker";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState("");
    const role = localStorage.getItem("role");
    const [clientData, setClientData] = useState([]);

    const fetchIdClient = async () => {
        try {
            const response = await fetch(`https://work.up.railway.app/api/v1/client/perfil?email=${email}`, {
              method: 'GET',
            });
            const data = await response.json();
            setClientData(data);
            localStorage.setItem("idClient", data.id);
          } catch (error) {
            console.error(error);
          }
    };

    const fetchIdWorker = async () => {
        try {
            const response = await fetch(`https://work.up.railway.app/api/v1/worker/perfil?email=${email}`, {
                method: 'GET',
            });
            const data = await response.json();
            localStorage.setItem("idWorker", data.id);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://work.up.railway.app/api/v1/auth/signin",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                if (data.role == "CLIENT") {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("role", data.role);
                    await fetchIdClient();
                    setIsLoggedIn(true);
                    console.log(localStorage.getItem("idClient"));
                } else if (data.role == "WORKER") {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("role", data.role);
                    await fetchIdWorker();
                    setIsLoggedIn(true);
                    console.log(localStorage.getItem("idWorker"));
                }
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage("An error occurred: " + error.message);
        }


        setEmail("");
        setPassword("");
    };

    return (
        <>
            {isLoggedIn ? ((role == "CLIENT")? <HomeCliente /> : <HomeWorker />) : (
                <div className="login">
                    <div className="login-container">
                        <h2 className="login-title">Log in</h2>
                        <p className="login-description">
                            Log in so you don't miss anything
                        </p>
                        <form className="forms" onSubmit={handleLogin}>
                            <div>
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field"/>
                            </div>
                            <div>
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value) } className="input-field"/>
                            </div>
                            <button type="submit" className="btn-login">
                            <a href="/homeClient">Log In</a>
                            </button>
                        </form>
                        <div>
                            <p className="login-prompt">
                                Don't have an account yet?
                            </p>
                            <button to="/signup" className="login-button">
                                <a href="/homeClient">Sign Up</a>
                            </button>
                        </div>
                    </div>
                    <div className="login-img">
                        <h1>
                            <span>Welcome to</span>
                            <br></br>
                            Work+ portal
                        </h1>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;

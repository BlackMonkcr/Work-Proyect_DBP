import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión aquí

    // Borra los campos del formulario después de enviar
    setUsername('');
    setPassword('');
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Log in</h2>
      <p className="login-description">Log in so you don't miss anything</p>
      <div className="image-container">
        <img src="src\img\fondo-login.png" alt="fondo-login" className="background-image" />
        <img src="src\img\worker_vrs_2.1-removebg-preview.png" alt="worker_vrs_2.1" className="silhouette-image" />
        <div className="text-container">
          <div className="main-text">Welcome to</div>
          <div className="main2-text">Work+ Portal</div>
          <div className="sub-text">Login to start enjoying</div>
        </div>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        <button type="submit" className="btn-login">
          Log In
        </button>
      </form>
      <p className="login-prompt">Don't have an account yet?</p>
      <button to="/signup" className="login-button">
        Sign Up
      </button>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [district, setDistrict] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Lógica de registro aquí

    // Borra los campos del formulario después de enviar
    setUsername('');
    setEmail('');
    setPassword('');
    setDistrict('');
    setName('');
    setPhoneNumber('');
    setAddress('');
  }

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign up</h2>
      <p className="signup-description">Sign up to find the best workers for your home!</p>
      <div className="image-container">
        <img src="src\img\fondo-login.png" alt="fondo-login" className="background-image" />
        <img src="src\img\worker_vrs_2.1-removebg-preview.png" alt="worker_vrs_2.1" className="silhouette-image" />
        <div className="text-container">
          <div className="main-text">Welcome to </div>
          <div className="main2-text">Work+ Portal</div>
          <div className="sub-text">Register to start enjoying</div>
        </div>
      </div>
      <form className="signup-form" onSubmit={handleSignup}>
      <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </div>
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
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="District"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input-field"
          />
        </div>
        <button type="submit" className="btn-register">
          Sign Up
        </button>
      </form>
      <p className="login-prompt">Do you have an account?</p>
      <Link type="button" className="login-button">
        Login
      </Link>
    </div>
  );
}

export default Signup;

import React, { useState } from 'react';
import '../css/Forms.css';

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
    setUsername('');
    setEmail('');
    setPassword('');
    setDistrict('');
    setName('');
    setPhoneNumber('');
    setAddress('');
  }

  return (
    <div className='register'>
      <div className="register-container">
        <h2 className="register-title">Sign Up</h2>
        <p className="register-description">Sign up to find the best workers for your home!</p>
        <form className="forms" onSubmit={handleSignup}>
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
        <div>
          <p className="register-prompt">Do you have an account?</p>
          <button to="/signup" className="login-button">Login</button>
        </div>
      </div>
      <div className="register-img">
        <h1>
          <span>Welcome to</span>
          <br></br>
          Work+ portal
        </h1>
      </div>
    </div>
  );
}

export default Signup;
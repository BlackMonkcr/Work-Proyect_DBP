import React, { useState } from 'react';
import '../css/Forms.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://work.up.railway.app/api/v1/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
      });

      const data = await response.text();

      if (response.ok) {
        setMessage('Login successful! Token: ' + data);
        setIsLoggedIn(true);
      } else {
        setMessage('Login failed! ' + data);
      }
    } catch (error) {
      setMessage('An error occurred: ' + error.message);
    }

    setUsername('');
    setPassword('');
  }

  return (
    <div className='login'>
      <div className="login-container">
        <h2 className="login-title">Log in</h2>
        <p className="login-description">Log in so you don't miss anything</p>
        <form className="forms" onSubmit={handleLogin}>
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
          <button type="submit" className="btn-login">Log In</button>
        </form>
        <div>
          <p className="login-prompt">Don't have an account yet?</p>
          <button to="/signup" className="login-button"><a href='/signUp'>Sign Up</a></button>
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
  );
}

export default Login;

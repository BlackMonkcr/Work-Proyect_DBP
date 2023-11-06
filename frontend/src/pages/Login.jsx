import React, { useState } from 'react';
import '../css/Forms.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
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
              type="text"
              placeholder="Username or Email"
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

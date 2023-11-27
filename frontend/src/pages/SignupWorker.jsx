import React, { useState } from 'react';
import '../css/Forms.css';
import Login from './Login.jsx'

function SignupWorker() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [national_id, setNationalId] = useState('');
  const [occupation, setOccupation]  = useState('');
  const [isSignUpWorker, setIsSignUpWorker] = useState(false);

  const handleSignUpWorker = async (e) => {
    e.preventDefault();
    
    if (isNaN(phoneNumber) || phoneNumber.length !== 9) {
        setErrorMessage('Phone number must be a 9-digit number.');
        return;
      }
    
      if (isNaN(national_id) || national_id.length !== 8) {
        setErrorMessage('DNI must be an 8-digit number.');
        return;
      }



    try {
      const response = await fetch(`https://work.up.railway.app/api/v1/auth/signupWorker`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
          occupation: occupation,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSignUpWorker(true);
      }
    } catch (error) {
      setMessage('An error occurred: ' + error.message);
    }
    
    setUsername('');
    setEmail('');
    setPassword('');
    setName('');
    setPhoneNumber('');
    setNationalId('');
    setOccupation('');
  }

  return (
    <>
      {isSignUpWorker ? (
        <Login />
         ):(<div className='register'>
        <div className="register-container">
          <h2 className="register-title">Sign Up</h2>
          <p className="register-description">Sign up to find the best workers for your home!</p>
          <form className="forms" onSubmit={handleSignUpWorker}>
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
                placeholder="Occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="National ID"
                value={national_id}
                onChange={(e) => setNationalId(e.target.value)}
                className="input-field"
              />
            </div>
            <button type="submit" className="btn-register"><a href='/homeWorker'>Sign Up</a>
            </button>
          </form>
          <div>
            <p className="register-prompt">Do you have an account?</p>
            <button className="login-button"><a href='/loginWorker'>Login</a></button>
          </div>
        </div>
        <div className="register-img">
          <h1>
            <span>Welcome to</span>
            <br></br>
            Work+ portal
          </h1>
        </div>
      </div>)}
    </>
  );
}

export default SignupWorker;
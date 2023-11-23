import React, { useState, useContext } from 'react';

const usernameContext = React.createContext();

const UsernameProvider = ({ children }) => {
    const [username, setUsername] = useState('');
  
    const setUsernameContext = (newUsername) => {
      setUsername(newUsername);
    };
  
    return (
      <usernameContext.Provider value={{ username, setUsernameContext }}>
        {children}
      </usernameContext.Provider>
    );
  };
  
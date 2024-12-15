import React, { useEffect, useState, createContext } from 'react';
import { getLocalStorage, setLocalStorage } from '../util/Localstorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: null });

  useEffect(() => {
    setLocalStorage()
    const data = getLocalStorage(); // Ensure this function returns { employees, admin }
    if (data) {
      setUserData(data);
    }
  }, []); // Add an empty dependency array to ensure it runs only once

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

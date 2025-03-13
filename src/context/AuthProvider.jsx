import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../util/Localstorage';

// Default Data for First-Time Load
// const defaultData = {
//   admin: { email: "admin@me.com", password: "123" },
//   employees: [
//     { id: 1, firstName: "Apoorv", email: "apoorv@me.com", password: "pass123", tasks: [], taskCounts: { newTask: 0, active: 0, completed: 0, failed: 0 } },
//     { id: 2, firstName: "Saurav", email: "saurav@me.com", password: "pass123", tasks: [], taskCounts: { newTask: 0, active: 0, completed: 0, failed: 0 } }
//   ]
// };

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    setLocalStorage()
    const [userData, setUserData] = useState(() => {
        const { employees, admin } = getLocalStorage();

        console.log(employees)

        // If localStorage is empty, initialize with defaultData
        if (!employees.length && !Object.keys(admin).length) {
            setLocalStorage(employees);
            return employees;
        }

        return {employees, admin };
    });

    // Sync localStorage whenever userData changes
    useEffect(() => {
        setLocalStorage(userData);
    }, [userData]);

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

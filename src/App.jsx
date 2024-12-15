import React, { useContext, useState } from 'react';
import Login from './components/Auth/login';
import AdminDashboard from './components/dashboard/AdminDashboard';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import { AuthContext } from './context/AuthProvider';

function App() {
  const { userData } = useContext(AuthContext); // Destructure userData from context
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
    } else if (
      userData.employees.some(
        (employee) => employee.email === email && employee.password === password
      )
    ) {
      setUser('employee');
    } else {
      alert('Invalid credentials');
    }
  };

  console.log('Context Data:', userData); // Log userData to debug

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}

export default App;

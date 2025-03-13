import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Taskno from '../other/Taskno';
import Tasklist from '../Tasklist/Tasklist';
import EmployeeHeader from '../other/EmployeeHeader';
import { AuthContext } from '../../context/AuthProvider';

const EmployeeDashboard = (props) => {
  // Get userData and setUserData from AuthContext
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 p-10"
    >
      {/* Header with greeting and logout button */}
      <EmployeeHeader changeUser={props.changeUser} username={userData.firstName || "Employee"} />
      
      {/* Pass updated userData to Taskno and Tasklist */}
      <div className="mt-8 space-y-8">
        <Taskno data={userData} /> 
        <Tasklist data={userData} setUserData={setUserData} />
      </div>
    </motion.div>
  );
};

export default EmployeeDashboard;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Taskno from '../other/Taskno';
import Tasklist from '../Tasklist/Tasklist';
import EmployeeHeader from '../other/EmployeeHeader';
// import EmployeeHeader from '../other/EmployeeHeader';

const EmployeeDashboard = (props) => {
  // Store user data in state to allow updates
  const [userData, setUserData] = useState(props.data);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 p-10"
    >
      {/* Header with greeting and logout button */}
      <EmployeeHeader changeUser={props.changeUser} username={userData.firstName || "Employee"} />
      
      {/* Task Summary and Task List */}
      <div className="mt-8 space-y-8">
        <Taskno data={userData} />
        <Tasklist data={userData} setUserData={setUserData} />
      </div>
    </motion.div>
  );
};

export default EmployeeDashboard;

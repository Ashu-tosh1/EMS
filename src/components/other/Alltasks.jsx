import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { motion } from 'framer-motion';

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);
console.log(userData)
  return (
    <div className="p-6 my-10 bg-[#121212] rounded-lg shadow-lg border border-gray-800">
      {/* Table Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="mb-4 py-3 px-5 flex justify-between bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white font-semibold text-lg shadow-md">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </motion.div>
      
      {/* Table Rows */}
      <div>
        {userData.employees.map((elem, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="mb-2 py-3 px-5 flex justify-between rounded-lg border border-gray-700 bg-gray-900 hover:scale-[1.02] transition transform duration-200 ease-in-out shadow-lg">
            <h2 className="w-1/5 text-gray-200">{elem.firstName}</h2>
            <h3 className="w-1/5 text-blue-400">{elem.taskCounts.newTask}</h3>
            <h5 className="w-1/5 text-yellow-400">{elem.taskCounts.active}</h5>
            <h5 className="w-1/5 text-green-400">{elem.taskCounts.completed}</h5>
            <h5 className="w-1/5 text-red-500">{elem.taskCounts.failed}</h5>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;

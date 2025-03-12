import React from 'react';
import { motion } from 'framer-motion';

const EmployeeHeader = ({ changeUser, username }) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between bg-gray-800 text-white py-4 px-6 rounded-lg shadow-lg border border-gray-700"
    >
      <div>
        <h1 className="text-xl font-medium">Welcome,</h1>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          {username} 👋
        </h2>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
      >
        Log Out
      </motion.button>
    </motion.div>
  );
};

export default EmployeeHeader;

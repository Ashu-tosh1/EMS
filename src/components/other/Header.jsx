import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../../context/AuthProvider';

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between bg-gray-900 text-white py-6 px-8 shadow-lg rounded-lg border border-gray-700"
    >
      {/* Greeting Section */}
      <div>
        <h1 className="text-lg font-medium text-gray-400">Hello,</h1>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
          {props.username} Ashutosh  👋
        </h2>
      </div>

      {/* Logout Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md border border-red-500 transition duration-300"
      >
        Log Out
      </motion.button>
    </motion.div>
  );
};

export default Header;

import React from 'react';
import { motion } from 'framer-motion';

const Taskno = ({ data }) => {
  console.log(data);

  // Ensure employees exist and access the first one
  const employee = data?.employees?.[0];

  if (!employee) {
    return <p className="text-center text-gray-500">No employee data available</p>;
  }

  const { newTask, active, completed, failed } = employee.taskCounts || {};

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
      {/* New Task Card */}
      <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl py-6 px-8 bg-blue-600 shadow-lg">
        <h2 className="text-3xl font-bold text-white">{newTask ?? 0}</h2>
        <h3 className="text-xl mt-1 font-medium text-white">New Tasks</h3>
      </motion.div>

      {/* Completed Task Card */}
      <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl py-6 px-8 bg-green-600 shadow-lg">
        <h2 className="text-3xl font-bold text-white">{completed ?? 0}</h2>
        <h3 className="text-xl mt-1 font-medium text-white">Completed Tasks</h3>
      </motion.div>

      {/* Active Task Card */}
      <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl py-6 px-8 bg-yellow-500 shadow-lg">
        <h2 className="text-3xl font-bold text-white">{active ?? 0}</h2>
        <h3 className="text-xl mt-1 font-medium text-white">Accepted Tasks</h3>
      </motion.div>

      {/* Failed Task Card */}
      <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl py-6 px-8 bg-red-600 shadow-lg">
        <h2 className="text-3xl font-bold text-white">{failed ?? 0}</h2>
        <h3 className="text-xl mt-1 font-medium text-white">Failed Tasks</h3>
      </motion.div>
    </div>
  );
};

export default Taskno;


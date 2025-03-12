import React from 'react';
import { motion } from 'framer-motion';

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex-shrink-0 h-full w-[300px] p-5 bg-gray-800 rounded-xl shadow-lg"
    >
      <div className="flex justify-between items-center">
        <span className="bg-blue-600 text-sm px-3 py-1 rounded text-white">
          {data.category}
        </span>
        <span className="text-sm text-gray-400">{data.taskDate}</span>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-300">{data.taskDescription}</p>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => onComplete(data)}
          className="bg-green-500 hover:bg-green-600 rounded font-medium py-1 px-2 text-xs text-white transition"
        >
          Mark as Completed
        </button>
        <button
          onClick={() => onFail(data)}
          className="bg-red-500 hover:bg-red-600 rounded font-medium py-1 px-2 text-xs text-white transition"
        >
          Mark as Failed
        </button>
      </div>
    </motion.div>
  );
};

export default AcceptTask;

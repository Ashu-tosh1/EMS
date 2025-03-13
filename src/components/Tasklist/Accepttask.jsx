import React from 'react';
import { motion } from 'framer-motion';

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-500  rounded-xl shadow-lg flex flex-col justify-between"
    >
      {/* Task Header */}
      <div>
        <div className="flex justify-between items-center">
          <span className="bg-white font-medium   text-sm px-3 py-1 rounded text-yellow-700">
            {data.category}
          </span>
          <span className="text-sm text-white">{data.taskDate}</span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-white">{data.taskTitle}</h2>
        <p className="text-sm mt-2 text-white">{data.taskDescription}</p>
      </div>

      {/* Buttons - Aligned Properly */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => onComplete(data)}
          className="w-1/2 bg-green-500 hover:bg-green-600 rounded font-medium py-2 px-4 text-sm text-white transition"
        >
           Complete
        </button>
        <button
          onClick={() => onFail(data)}
          className="w-1/2 bg-red-500 hover:bg-red-600 rounded font-medium py-2 px-4 text-sm text-white transition"
        >
           Fail
        </button>
      </div>
    </motion.div>
  );
};

export default AcceptTask;

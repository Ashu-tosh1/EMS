import React from 'react';

const Completetask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-600 rounded-xl shadow-lg flex flex-col justify-between">
      {/* Task Header */}
      <div>
        <div className="flex justify-between items-center">
          <span className="bg-white text-green-600 text-sm px-3 py-1 rounded font-medium">
            {data.category}
          </span>
          <span className="text-sm text-gray-200">{data.taskDate}</span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-white">{data.taskTitle}</h2>
        <p className="text-sm mt-2 text-gray-200">{data.taskDescription}</p>
      </div>

      {/* Completion Button - Styled & Centered */}
      <div className="mt-6">
        <button className="w-full bg-white hover:bg-gray-300 rounded font-medium py-2 text-sm text-green-600 transition">
          Completed
        </button>
      </div>
    </div>
  );
};

export default Completetask;

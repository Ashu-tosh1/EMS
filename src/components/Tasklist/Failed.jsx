import React from 'react';

const Failed = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-600 rounded-xl shadow-lg flex flex-col justify-between">
      {/* Task Header */}
      <div>
        <div className="flex justify-between items-center">
          <span className="bg-white text-red-600 text-sm px-3 py-1 rounded font-medium">
            {data.category}
          </span>
          <span className="text-sm text-white font-semibold">{data.taskDate}</span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-white">{data.taskTitle}</h2>
        <p className="text-sm mt-2 text-white">{data.taskDescription}</p>
      </div>

      {/* Failed Button - Centered & Styled */}
      <div className="mt-6">
        <button className="w-full bg-white hover:bg-gray-200 rounded font-medium py-2 text-sm text-red-600  transition">
           Failed
        </button>
      </div>
    </div>
  );
};

export default Failed;

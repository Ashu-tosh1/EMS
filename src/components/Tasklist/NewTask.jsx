import React from 'react';

const NewTask = ({ data,onAccept }) => {
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-6 bg-blue-600 rounded-2xl shadow-lg text-white">
      {/* Task Header */}
      <div className="flex justify-between items-center">
        <span className="bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-lg shadow">
          {data.category}
        </span>
        <span className="text-xs opacity-80">{data.taskDate}</span>
      </div>

      {/* Task Title & Description */}
      <h2 className="mt-4 text-xl font-bold">{data.taskTitle}</h2>
      <p className="text-sm mt-2 opacity-90">{data.taskDescription}</p>

      {/* Accept Button */}
      <div className="mt-6">
        <button onClick={onAccept} className="w-full bg-white text-blue-600 hover:bg-gray-300 transition-all duration-300 font-semibold py-2 rounded-lg shadow-md">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;

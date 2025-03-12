import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  
  // We'll create the new task object locally before updating the state.
  const submitHandler = (e) => {
    e.preventDefault();
    
    // Build new task object
    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Update tasks for the selected employee
    const data = [...userData];
    data.forEach((elem) => {
      if (assignTo === elem.firstName) {
        elem.tasks.push(task);
        elem.taskCounts.newTask += 1;
      }
    });
    setUserData(data);

    // Clear form fields
    setTaskTitle('');
    setCategory('');
    setAssignTo('');
    setTaskDate('');
    setTaskDescription('');
  };

  const employeeList = ['Apoorv', 'Saurav', 'Vipul', 'Kartikesh', 'Parthib'];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.8 }}
      animate={{ opacity: 1, scale: 1.1 }}
      transition={{ duration: 1 }}
      className="p-8 bg-gray-900 mt-10 rounded-xl shadow-2xl border border-gray-800 max-w-screen-xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Assign a New Task</h2>
      <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          {/* Assign To (Dropdown) */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Assign To</label>
            <select
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            >
              <option value="" disabled>
                Select an Employee
              </option>
              {employeeList.map((employee) => (
                <option key={employee} value={employee}>
                  {employee}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Dev, etc."
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-6">
          {/* Description */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Enter task details..."
              className="w-full h-48 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none"
            ></textarea>
          </div>

          {/* Create Task Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold text-white transition shadow-lg"
          >
            Create Task
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default CreateTask;

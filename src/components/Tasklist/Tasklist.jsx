import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import AcceptTask from './Accepttask';
import NewTask from './NewTask';
import Completetask from './Completetask';
import Failed from './Failed';
import { AuthContext } from '../../context/AuthProvider';
import { setLocalStorage } from '../../util/Localstorage';

const Tasklist = () => {
  const [userData, setUserData] = useContext(AuthContext);

  console.log("User Data in Tasklist:", userData); // Debugging

  if (!userData || !userData.employees || userData.employees.length === 0) {
    return <p className="text-center text-gray-500">No employees found</p>;
  }

  const employee = userData.employees[0]; // Access first employee
  const tasks = employee.tasks || []; // Get tasks array safely

  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">No tasks available</p>;
  }

  const handleTaskUpdate = (task, status) => {
    setUserData((prevData) => {
      const updatedEmployees = prevData.employees.map((emp) => {
        if (emp.id === employee.id) {
          let updatedTasks = emp.tasks.map((t) => {
            if (t.taskTitle === task.taskTitle && t.taskDate === task.taskDate) {
              if (status === "accepted") {
                return { ...t, active: true, newTask: false };
              }
              if (status === "completed") {
                return { ...t, active: false, completed: true };
              }
              if (status === "failed") {
                return { ...t, active: false, failed: true };
              }
            }
            return t;
          });
  
          // ✅ Recalculate Task Counts in Real-Time
          const newTask = updatedTasks.filter((t) => t.newTask).length;
          const active = updatedTasks.filter((t) => t.active).length;
          const completed = updatedTasks.filter((t) => t.completed).length;
          const failed = updatedTasks.filter((t) => t.failed).length;
  
          return {
            ...emp,
            tasks: updatedTasks,
            taskCounts: { newTask, active, completed, failed },
          };
        }
        return emp;
      });
  
      const updatedUserData = { ...prevData, employees: updatedEmployees };
  
      // ✅ Force UI to Re-Render
      setTimeout(() => {
        setUserData({ ...updatedUserData }); // Ensure React picks up state change
      }, 0);
  
      setLocalStorage(updatedUserData); // Save to local storage
      return updatedUserData;
    });
  };
  
  
  
  
  return (
    <div className="mt-10">
      <div className="h-[270px] my-4 flex flex-nowrap items-center gap-6 py-10 w-full overflow-x-auto scroll-smooth hide-scrollbar">
        {tasks.map((elem, idx) => {
          if (elem.active) {
            return (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <AcceptTask
                  data={elem}
                  onComplete={() => handleTaskUpdate(elem, 'completed')}
                  onFail={() => handleTaskUpdate(elem, 'failed')}
                />
              </motion.div>
            );
          }
          if (elem.newTask) {
            return (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <NewTask data={elem} 
                 onAccept={() => handleTaskUpdate(elem, 'accepted')}/>
              </motion.div>
            );
          }
          if (elem.completed) {
            return (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <Completetask data={elem} />
              </motion.div>
            );
          }
          if (elem.failed) {
            return (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <Failed data={elem} />
              </motion.div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};


export default Tasklist;

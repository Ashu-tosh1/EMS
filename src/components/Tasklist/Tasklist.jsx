import React from 'react';
import AcceptTask from './Accepttask';
import NewTask from './NewTask';
import Completetask from './Completetask';
import Failed from './Failed';
import { motion } from 'framer-motion';

const Tasklist = ({ data, setUserData }) => {

  const handleTaskUpdate = (task, status) => {
    setUserData((prevData) => {
      return prevData.map((employee) => {
        if (employee.tasks.includes(task)) {
          // Update task status
          const updatedTasks = employee.tasks.map((t) =>
            t === task
              ? {
                  ...t,
                  active: false,
                  newTask: false,
                  completed: status === "completed",
                  failed: status === "failed",
                }
              : t
          );

          // Update task counts
          return {
            ...employee,
            tasks: updatedTasks,
            taskCounts: {
              ...employee.taskCounts,
              active: employee.taskCounts.active - (task.active ? 1 : 0),
              newTask: employee.taskCounts.newTask - (task.newTask ? 1 : 0),
              completed: employee.taskCounts.completed + (status === "completed" ? 1 : 0),
              failed: employee.taskCounts.failed + (status === "failed" ? 1 : 0),
            },
          };
        }
        return employee;
      });
    });
  };

  return (
    <div className="mt-10">
      <div
        id="tasklist"
        className="h-[270px] my-4 flex flex-nowrap items-center gap-6 py-10 w-full overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {data.tasks.map((elem, idx) => {
          if (elem.active) {
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
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
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <NewTask data={elem} />
              </motion.div>
            );
          }
          if (elem.completed) {
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Completetask data={elem} />
              </motion.div>
            );
          }
          if (elem.failed) {
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
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

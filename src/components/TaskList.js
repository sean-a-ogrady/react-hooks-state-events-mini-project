import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  const [currentTasks, setCurrentTasks] = useState([...tasks]);

  function deleteTask(taskText) {
    setCurrentTasks([...currentTasks].filter(task => {return task.text != taskText}));
  }

  return (
    <div className="tasks">
      {currentTasks.map(task => {
        return <Task
          key={task.text}
          text={task.text}
          category={task.category}
          deleteTask={deleteTask}
        />
      })}
    </div>
  );
}

export default TaskList;

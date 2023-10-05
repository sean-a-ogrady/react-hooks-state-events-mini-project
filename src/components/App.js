import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filter, setFilter] = useState("All");
  const [newTask, setNewTask] = useState({ text: "", category: "Code" });
  const [tasks, setTasks] = useState([...TASKS]);

  function selectFilter(event) {
    setFilter(event.target.textContent);
  }

  function displayNewTask(event) {
    event.preventDefault();
    if (newTask.text !== "") setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectFilter={selectFilter} filter={filter} />
      <NewTaskForm categories={CATEGORIES} newTask={newTask} setNewTask={setNewTask} displayNewTask={displayNewTask} />
      <TaskList tasks={tasks} filter={filter} setTasks={setTasks} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filter, setFilter] = useState("All");

  function selectFilter(event) {
    setFilter(event.target.textContent);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectFilter={selectFilter} filter={filter}/>
      <NewTaskForm />
      <TaskList tasks={TASKS} filter={filter}/>
    </div>
  );
}

export default App;

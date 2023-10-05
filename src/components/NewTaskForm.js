import React from "react";

function NewTaskForm({categories, newTask, setNewTask, displayNewTask}) {
  return (
    <form className="new-task-form" onSubmit={displayNewTask}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={(event) => setNewTask({text: event.target.value, category: newTask.category})}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(event) => setNewTask({text: newTask.text, category: event.target.value})}>
          {categories.filter(category => category !== "All").map(category => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

import Task from "./Task";

function TaskList({ tasks, filter, setTasks }) {

  function deleteTask(taskText) {
    setTasks(tasks.filter(task => task.text != taskText));
  }

  const filteredTasks = tasks.filter(task => filter === "All" || task.category === filter);

  return (
    <div className="tasks">
      {filteredTasks.map(task => {
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

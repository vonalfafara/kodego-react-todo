import { useState } from "react";
import TaskItem from "./components/TaskItem";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const [tasks, setTasks] = useState([]);

  function changeTask(e) {
    setTask(e.target.value);
  }

  function changeDescription(e) {
    setDescription(e.target.value);
  }

  function changeStatus(e) {
    const newStatus = e.target.checked ? "On Going" : "To Do";
    setStatus(newStatus);
  }

  function createTask(e) {
    e.preventDefault();
    const newTask = {
      task: task,
      description: description,
      status: status,
    };
    let newTasks = [...tasks];
    newTasks.push(newTask);
    setTasks(newTasks);
  }

  function completeTask(i) {
    const updatedTasks = tasks.map((task, index) => {
      if (i === index) {
        task.status = "Completed";
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function doTask(i) {
    const updatedTasks = tasks.map((task, index) => {
      if (i === index) {
        task.status = "On Going";
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div id="todo-app">
      <form onSubmit={createTask}>
        <input
          type="text"
          value={task}
          onChange={changeTask}
          placeholder="Task"
        />
        <input
          type="text"
          value={description}
          onChange={changeDescription}
          placeholder="Description"
        />
        <div className="status">
          <input type="checkbox" onChange={changeStatus} id="status" />
          <label htmlFor="status">On Going</label>
        </div>
        <input type="submit" value="Create Task" />
      </form>
      {tasks.map((task, index) => {
        return (
          <TaskItem
            taskTitle={task.task}
            taskDescription={task.description}
            taskStatus={task.status}
            setComplete={completeTask}
            setOnGoing={doTask}
            position={index}
            key={index}
          />
        );
      })}
      {/* <TaskItem
        taskTitle="This is a custom task title"
        taskDescription="Sample task description"
        taskStatus="Completed"
      /> */}
    </div>
  );
};

export default App;

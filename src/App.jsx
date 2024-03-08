import { useState } from "react";
import TaskItem from "./components/TaskItem";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route, Link } from "react-router-dom";
import routes from "./routes";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const [taskIndexToUpdate, setTaskIndexToUpdate] = useState();
  const [tasks, setTasks] = useState([]);
  const [toUpdate, setToUpdate] = useState(false);

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
    setTask("");
    setDescription("");
    setStatus("To Do");
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

  function deleteTask(i) {
    const updatedTasks = tasks.filter((task, index) => {
      return index !== i;
    });
    console.log(updatedTasks);
    setTasks(updatedTasks);
  }

  function setUpdate(taskToUpdate, descriptionToUpdate, statusToUpdate, index) {
    if (index !== taskIndexToUpdate) {
      setToUpdate(true);
      setTask(taskToUpdate);
      setDescription(descriptionToUpdate);
      setStatus(statusToUpdate);
      setTaskIndexToUpdate(index);
    } else {
      setTaskIndex();
      setToUpdate(false);
      setTask("");
      setDescription("");
      setStatus("To Do");
    }
  }

  function updateTask(e) {
    e.preventDefault();
    const updatedTasks = tasks.map((taskItem, index) => {
      if (index === taskIndexToUpdate) {
        taskItem.task = task;
        taskItem.description = description;
        taskItem.status = status;
      }
      return taskItem;
    });
    setTasks(updatedTasks);
    setToUpdate(false);
  }

  return (
    <div id="todo-app">
      <nav className="links">
        {routes.map((route, index) => {
          return (
            <Link key={index} to={route.path}>
              {route.name}
            </Link>
          );
        })}
      </nav>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            />
          );
        })}
      </Routes>
      <form onSubmit={toUpdate ? updateTask : createTask}>
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
          <input
            type="checkbox"
            onChange={changeStatus}
            id="status"
            checked={status === "On Going"}
          />
          <label htmlFor="status">On Going</label>
        </div>
        <input type="submit" value={toUpdate ? "Update Task" : "Create Task"} />
      </form>
      {tasks.map((task, index) => {
        return (
          <TaskItem
            taskTitle={task.task}
            taskDescription={task.description}
            taskStatus={task.status}
            setComplete={completeTask}
            setOnGoing={doTask}
            onDelete={deleteTask}
            onUpdate={setUpdate}
            position={index}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default App;

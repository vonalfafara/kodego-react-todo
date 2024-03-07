import "./TaskItem.css";

const TaskItem = (props) => {
  const taskClass = `task-item ${
    props.taskStatus === "On Going"
      ? "ongoing"
      : props.taskStatus === "Completed"
      ? "completed"
      : ""
  }`;
  return (
    <div className={taskClass}>
      <div>
        <h3>{props.taskTitle}</h3>
        <p>{props.taskDescription}</p>
      </div>
      <div className="actions">
        <button
          className="btn-success"
          onClick={() => props.setComplete(props.position)}
        >
          Completed
        </button>
        <button
          className="btn-warning"
          onClick={() => props.setOnGoing(props.position)}
        >
          On Going
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

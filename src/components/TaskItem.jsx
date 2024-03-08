import "./TaskItem.css";

const TaskItem = ({
  taskTitle,
  taskDescription,
  taskStatus,
  setComplete,
  setOnGoing,
  onDelete,
  onUpdate,
  position,
}) => {
  const taskClass = `task-item ${
    taskStatus === "On Going"
      ? "ongoing"
      : taskStatus === "Completed"
      ? "completed"
      : ""
  }`;
  return (
    <div className={taskClass}>
      <div>
        <h3>{taskTitle}</h3>
        <p>{taskDescription}</p>
      </div>
      <div className="actions">
        {taskStatus !== "Completed" ? (
          <>
            <button
              className="btn-success"
              onClick={() => setComplete(position)}
            >
              <box-icon name="check" color="white" size="xs"></box-icon>
            </button>
            {taskStatus !== "On Going" ? (
              <button
                className="btn-warning"
                onClick={() => setOnGoing(position)}
              >
                <box-icon
                  name="alarm-exclamation"
                  type="solid"
                  color="#ffffff"
                  size="xs"
                ></box-icon>
              </button>
            ) : null}
            <button
              className="btn-info"
              onClick={() =>
                onUpdate(taskTitle, taskDescription, taskStatus, position)
              }
            >
              <box-icon
                name="edit-alt"
                type="solid"
                color="#ffffff"
                size="xs"
              ></box-icon>
            </button>
          </>
        ) : null}
        <button className="btn-danger" onClick={() => onDelete(position)}>
          <box-icon name="x" color="white" size="xs"></box-icon>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

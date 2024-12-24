import React from "react";

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <li key={index} style={{ margin: "10px 0" }}>
          <span
            onClick={() => toggleTaskCompletion(index)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

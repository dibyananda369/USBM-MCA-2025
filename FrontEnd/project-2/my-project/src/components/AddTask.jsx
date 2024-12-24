import React, { useRef } from "react";

function AddTask({ addTask }) {
  const inputRef = useRef(null);

  const handleAddTask = () => {
    const newTask = inputRef.current.value.trim();
    if (newTask) {
      addTask(newTask);
      inputRef.current.value = "";
    }
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Add a new task" />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;

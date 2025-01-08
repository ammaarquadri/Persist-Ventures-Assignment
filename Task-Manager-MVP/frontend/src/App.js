import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState(""); // State for due date

  const addTask = () => {
    if (task.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: task, completed: false, dueDate: dueDate }
      ]);
      setTask("");
      setDueDate(""); // Reset due date field
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Task Manager</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          className="form-control"
          placeholder="Due date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((t) => (
          <li
            key={t.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              t.completed ? "list-group-item-success" : ""
            }`}
          >
            <span
              onClick={() => toggleTask(t.id)}
              style={{ textDecoration: t.completed ? "line-through" : "none", cursor: "pointer" }}
            >
              {t.text}
            </span>
            <span>{t.dueDate && `Due: ${t.dueDate}`}</span> {/* Display Due Date */}
            <button className="btn btn-danger btn-sm" onClick={() => deleteTask(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

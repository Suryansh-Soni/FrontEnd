import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

export default function TodoList() {
  const [task, setTask] = useState([
    { task: "Learn React", id: uuidv4(), isCompleted: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTask = () => {
    if (!newTodo.trim()) return;

    setTask((prev) => [
      ...prev,
      {
        task: newTodo,
        id: uuidv4(),
        isCompleted: false,
      },
    ]);

    setNewTodo("");
  };

  const updateTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const deleteTask = (id) => {
    setTask((prev) => prev.filter((item) => item.id !== id));
  };

  const updatedAllTask = () => {
    setTask((prev) =>
      prev.map((item) => ({
        ...item,
        task: item.task.toUpperCase(),
      })),
    );
  };

  const updateTask = (id) => {
    setTask((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, task: item.task.toUpperCase() } : item,
      ),
    );
  };

  const toggleTaskCompletion = (id) => {
    setTask((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <p className="subtitle">Organize your tasks and stay productive.</p>

      <div className="input-container">
        <input
          type="text"
          onChange={updateTodo}
          value={newTodo}
          placeholder="Enter a new task..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />

        <button className="add-btn" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul className="todo-list">
        {task.map((item) => (
          <li
            key={item.id}
            className={item.isCompleted ? "completed todo-item" : "todo-item"}
          >
            <div className="task-content">
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => toggleTaskCompletion(item.id)}
              />

              <span>{item.task}</span>
            </div>

            <div className="button-group">
              <button
                className="update-btn"
                onClick={() => updateTask(item.id)}
              >
                Uppercase
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTask(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {task.length === 0 && (
        <p className="empty-message">No tasks available. Add a new task.</p>
      )}

      {task.length > 0 && (
        <button className="uppercase-all-btn" onClick={updatedAllTask}>
          Convert All to Uppercase
        </button>
      )}
    </div>
  );
}

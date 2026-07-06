import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [task, setTask] = useState([
    { task: "any", id: uuidv4(), isCompleted: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  let addTask = () => {
    if (!newTodo.trim()) return;

    setTask((prev) => [
      ...prev,
      { task: newTodo, id: uuidv4(), isCompleted: false },
    ]);
    setNewTodo("");
  };

  let updateTodo = (e) => {
    setNewTodo(e.target.value);
  };

  let deleteTask = (id) => {
    setTask(() => task.filter((item) => item.id !== id));
  };
  let UpdatedAllTask = () => {
    setTask(
      task.map((prev) => {
        return { ...prev, task: prev.task.toUpperCase() };
      }),
    );
  };

  let UpdateTask = (id) => {
    setTask(
      task.map((prev) => {
        if (prev.id == id) {
          return { ...prev, task: prev.task.toUpperCase() };
        } else {
          return prev;
        }
      }),
    );
  };

  let toggleTaskCompletion = (id) => {
    setTask(
      task.map((prev) => {
        if (prev.id == id) {
          return { ...prev, isCompleted: !prev.isCompleted };
        } else {
          return prev;
        }
      }),
    );
  };

  return (
    <>
      <h1>Todo List</h1>
      <input type="text" onChange={updateTodo} value={newTodo} />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {task.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
          >
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.task}
            &nbsp;&nbsp;
            <button onClick={() => deleteTask(task.id)}>Delete task</button>
            <button onClick={() => UpdateTask(task.id)}>Update task</button>
          </li>
        ))}
      </ul>
      <button onClick={UpdatedAllTask}>to Upper Case </button>
    </>
  );
}

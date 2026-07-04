import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [task, setTask] = useState([{ task: "any", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState("");

  let addTask = () => {
    if (!newTodo.trim()) return;

    setTask((prev) => [...prev, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  };

  let updateTodo = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <>
      <h1>Todo List</h1>
      <input type="text" onChange={updateTodo} value={newTodo} />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {task.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </>
  );
}

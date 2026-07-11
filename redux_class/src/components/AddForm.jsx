import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice.js";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <button>Add tasks</button>
      </form>
    </>
  );
}

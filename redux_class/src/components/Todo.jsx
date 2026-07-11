import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../feature/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <h2>Todo list app</h2>

      <AddForm />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => dispatch(markAsDone(todo.id))}
            />

            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>

            <button onClick={() => clickHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

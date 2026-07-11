import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abc", task: "demo_task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    // Add Todo
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };

      state.todos.push(newTodo);
    },

    // Delete Todo
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // Mark Todo as Done
    markAsDone: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.isDone = true;
      }
    },
  },
});


export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;


export default todoSlice.reducer;

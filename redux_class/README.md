# Redux Toolkit and Global State Management

This folder contains my practical learning and implementation of Redux Toolkit with React.

After learning how to manage local component state using `useState`, I moved on to understanding how state can be managed globally and shared across multiple components.

The main purpose of this section was to understand the Redux architecture and the complete flow of data through a React application.

---

# Why Redux?

React's `useState` is useful for managing local component state.

```javascript
const [task, setTask] = useState([]);
```

However, as applications grow, multiple components may need access to the same data.

Passing data through many levels of components can make state management more difficult.

Redux provides a centralized location for managing shared application state.

```text
Multiple Components
        ↓
    Redux Store
        ↓
Shared Global State
```

---

# Technologies Used

- React.js
- JavaScript ES6+
- Redux
- Redux Toolkit
- React Redux
- Vite
- npm

---

# Topics Covered

## Redux Store

The Redux Store contains the global state of the application.

I created the store using `configureStore`.

```javascript
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
```

The reducer controls how the state changes.

---

## Redux Provider

The `Provider` connects the Redux Store with the React application.

```jsx
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
```

Every component inside `Provider` can access the Redux Store.

```text
Provider
   │
   ├── Component
   │      ├── useSelector()
   │      └── useDispatch()
   │
   └── Other Components
```

---

## createSlice

I used `createSlice` to define:

- Slice name
- Initial state
- Reducers
- Actions

Example:

```javascript
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "abc",
      task: "demo_task",
      isDone: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",

  initialState,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };

      state.todos.push(newTodo);
    },
  },
});
```

---

# Reducers

Reducers define how the Redux state should change when an action is dispatched.

---

## Add Todo Reducer

```javascript
addTodo: (state, action) => {
  const newTodo = {
    id: nanoid(),
    task: action.payload,
    isDone: false,
  };

  state.todos.push(newTodo);
};
```

This adds a new todo to the global state.

---

## Delete Todo Reducer

```javascript
deleteTodo: (state, action) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload);
};
```

The ID of the todo is passed through `action.payload`.

---

## Mark Todo as Completed

```javascript
markAsDone: (state, action) => {
  const todo = state.todos.find((todo) => todo.id === action.payload);

  if (todo) {
    todo.isDone = !todo.isDone;
  }
};
```

This finds the required todo and toggles its completion status.

---

# Actions

Redux Toolkit automatically generates actions from the reducers defined inside `createSlice`.

```javascript
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
```

These actions can then be dispatched from React components.

---

# Exporting the Reducer

The slice reducer is exported:

```javascript
export default todoSlice.reducer;
```

It is then imported into the Redux Store:

```javascript
import todoReducer from "../feature/todo/todoSlice";
```

Because this is a default export, the imported reducer can be given a descriptive name such as:

```javascript
todoReducer;
```

---

# useSelector

`useSelector` is used to read data from the Redux Store.

```javascript
const todos = useSelector((state) => state.todos);
```

The component automatically re-renders when the selected Redux state changes.

```text
Redux State Changes
       ↓
useSelector Detects Change
       ↓
Component Re-renders
       ↓
Updated UI
```

---

# useDispatch

`useDispatch` is used to dispatch actions.

```javascript
const dispatch = useDispatch();
```

Example:

```javascript
dispatch(addTodo("Learn Redux"));
```

This sends the action to the Redux Store.

---

# action.payload

The payload contains the data sent with an action.

Example:

```javascript
dispatch(addTodo("Learn Redux"));
```

Inside the reducer:

```javascript
action.payload;
```

contains:

```text
Learn Redux
```

For deleting a todo:

```javascript
dispatch(deleteTodo(todo.id));
```

The payload contains the todo ID.

---

# Redux Toolkit Todo Application

To apply the concepts, I built a Todo List application using Redux Toolkit.

## Features

- Add new tasks
- Display tasks from the Redux Store
- Delete tasks
- Mark tasks as completed
- Manage application state globally
- Automatically update the UI when Redux state changes

---

# Complete Redux Data Flow

```text
User Interaction
       ↓
dispatch(action)
       ↓
Action is Sent
       ↓
Reducer Executes
       ↓
Redux Store Updates
       ↓
useSelector Detects the Change
       ↓
Component Re-renders
       ↓
Updated User Interface
```

Example:

```text
User enters "Learn Redux"
        ↓
dispatch(addTodo("Learn Redux"))
        ↓
action.payload = "Learn Redux"
        ↓
addTodo Reducer Executes
        ↓
state.todos.push(newTodo)
        ↓
Redux Store Updates
        ↓
Todo Component Re-renders
        ↓
"Learn Redux" Appears in the UI
```

---

# Redux Toolkit and Immer

In traditional Redux, state should never be mutated directly.

Traditional immutable update:

```javascript
return {
  ...state,
  todos: [...state.todos, newTodo],
};
```

Redux Toolkit uses **Immer** internally.

This allows us to write:

```javascript
state.todos.push(newTodo);
```

Although this looks like direct mutation, Immer internally creates the required immutable state update.

---

# Local State vs Global State

## Local State

Managed using:

```javascript
useState();
```

Best suited for:

- Input values
- UI toggles
- Form data
- Component-specific information

---

## Global State

Managed using Redux Toolkit.

Best suited for:

- Shared application data
- Authentication state
- Shopping carts
- User information
- Application-wide state
- Data required by multiple components

---

# Project Structure

```text
src/
│
├── app/
│   └── store.js
│
├── components/
│   ├── AddForm.jsx
│   └── Todo.jsx
│
├── feature/
│   └── todo/
│       └── todoSlice.js
│
├── App.jsx
└── main.jsx
```

---

# Todo Slice Structure

```text
todoSlice
    │
    ├── Initial State
    │
    ├── addTodo Reducer
    │
    ├── deleteTodo Reducer
    │
    └── markAsDone Reducer
```

---

# Component Responsibilities

## AddForm

Responsible for:

- Taking user input
- Managing input state
- Dispatching the `addTodo` action

```javascript
dispatch(addTodo(task));
```

---

## Todo

Responsible for:

- Reading todos using `useSelector`
- Displaying todos
- Dispatching delete actions
- Dispatching completion actions

Example:

```javascript
dispatch(deleteTodo(todo.id));
```

---

# Key Learnings

Through this project, I developed a better understanding of:

- Why global state management is needed
- Redux architecture
- Redux Store
- Redux Toolkit
- `configureStore`
- `createSlice`
- Initial state
- Reducers
- Actions
- `action.payload`
- `useSelector`
- `useDispatch`
- Redux `Provider`
- Updating global state
- Redux Toolkit and Immer
- Local state vs global state
- Complete Redux data flow

---

# Redux Mental Model

A simple way to understand Redux:

```text
Component
   │
   │ dispatch(action)
   ▼
Reducer
   │
   │ updates state
   ▼
Redux Store
   │
   │ useSelector()
   ▼
Component
```

The component does not directly modify the Redux Store.

Instead:

1. The component dispatches an action.
2. The reducer receives the action.
3. The reducer updates the state.
4. The Store contains the updated state.
5. `useSelector` receives the updated data.
6. React re-renders the component.

---

# Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

# Purpose

This folder represents my introduction to global state management in React.

After learning local state management with `useState`, this project helped me understand how larger applications can manage shared state using Redux Toolkit.

The most important flow learned in this section is:

```text
User Interaction
       ↓
Action
       ↓
Reducer
       ↓
Store
       ↓
Component
       ↓
User Interface
```

This knowledge provides a foundation for using Redux Toolkit in larger applications involving:

- Authentication
- Shopping carts
- User profiles
- API data
- Shared application state
- Complex full-stack applications

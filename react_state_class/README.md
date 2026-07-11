# React State, Hooks and Mini Projects

This folder represents the next stage of my React.js learning journey, where I moved beyond basic components and started building interactive applications using state, Hooks, forms, and APIs.

After learning React fundamentals such as JSX, components, props, conditional rendering, and event handling, I focused on understanding how React applications manage dynamic data.

The main goal of this section was to understand:

> How does a React application respond when data changes?

The answer lies primarily in state management.

---

# Topics Covered

## useState

I learned how to manage local component state using the `useState` Hook.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

The fundamental React state flow is:

```text
User Interaction
       ↓
State Update
       ↓
Component Re-render
       ↓
Updated User Interface
```

---

## Functional State Updates

I practiced updating state using the previous state value.

```javascript
setCount((prevCount) => prevCount + 1);
```

This is especially useful when the new state depends on the previous state.

---

## Managing Objects in State

I learned how to update individual properties while preserving the rest of an object.

```javascript
const [user, setUser] = useState({
  name: "John",
  age: 25,
});

setUser({
  ...user,
  age: 26,
});
```

The spread operator preserves the existing properties while updating the required value.

---

## Managing Arrays in State

I practiced adding, updating, and deleting items from arrays stored in state.

### Adding an Item

```javascript
setTasks((prev) => [...prev, newTask]);
```

### Deleting an Item

```javascript
setTasks((prev) => prev.filter((task) => task.id !== id));
```

### Updating an Item

```javascript
setTasks((prev) =>
  prev.map((task) => (task.id === id ? { ...task, isCompleted: true } : task)),
);
```

---

## useEffect

I learned how to handle side effects using the `useEffect` Hook.

```javascript
useEffect(() => {
  fetchData();
}, []);
```

I used `useEffect` for:

- Fetching initial API data
- Running code when a component loads
- Understanding dependency arrays
- Managing side effects

---

# Form Handling

I practiced building controlled forms in React.

Topics covered:

- Controlled inputs
- `onChange`
- `onSubmit`
- `preventDefault()`
- Multiple form fields
- Managing form data as objects
- Resetting forms
- Form validation concepts
- Formik

Example:

```javascript
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
```

---

# API Integration

I learned how React applications communicate with external APIs.

Topics covered:

- Fetch API
- `async/await`
- JSON responses
- API requests
- Storing responses in state
- Fetching data with `useEffect`
- Dynamically updating the UI

General flow:

```text
User Interaction
       ↓
API Request
       ↓
Server Response
       ↓
State Update
       ↓
Component Re-render
       ↓
Updated User Interface
```

---

# Mini Projects

## Like Button

A simple interactive component built to understand state and event handling.

### Concepts Practiced

- `useState`
- Boolean state
- Event handling
- Conditional rendering
- Dynamic UI updates

---

## Lottery Game

A dynamic lottery application built using reusable React components.

### Features

- Generates random lottery numbers
- Supports configurable ticket size
- Uses reusable ticket components
- Accepts a custom winning condition
- Generates a new ticket dynamically
- Displays the result based on the winning condition

### Concepts Practiced

- `useState`
- Props
- Arrays
- Helper functions
- Component composition
- Conditional rendering
- Passing functions as props

Example:

```jsx
<Lottery n={3} winCondition={(ticket) => sum(ticket) === 15} />
```

This project helped me understand how behavior can also be passed to components through functions.

---

## Todo List

A task management application built to practice complex state updates.

### Features

- Add new tasks
- Delete tasks
- Mark tasks as completed
- Convert individual tasks to uppercase
- Convert all tasks to uppercase
- Conditional styling for completed tasks

### Concepts Practiced

- `useState`
- Array state management
- `map()`
- `filter()`
- Object spread operator
- Functional state updates
- Checkboxes
- Conditional styling

Example:

```javascript
const toggleTaskCompletion = (id) => {
  setTask((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,
            isCompleted: !item.isCompleted,
          }
        : item,
    ),
  );
};
```

---

## Comment and Rating System

A form-based application for submitting and displaying comments.

### Concepts Practiced

- Controlled components
- Multiple form fields
- Object state
- Ratings
- Form submission
- Passing data between components
- Reusable components

---

## Random Joke Generator

An API-based React application that fetches and displays random jokes.

### Concepts Practiced

- Fetch API
- `async/await`
- `useEffect`
- API responses
- State management
- Dynamic content updates

The application fetches data from an external API and updates the UI with the received response.

---

## Weather Application

A weather application built to understand user input, API integration, and dynamic rendering.

### Concepts Practiced

- Controlled input
- API requests
- Async JavaScript
- State management
- Conditional rendering
- Displaying API data
- Material UI components
- Component communication

General flow:

```text
Enter City
    ↓
Submit Search
    ↓
Weather API Request
    ↓
Receive Weather Data
    ↓
Update State
    ↓
Display Weather Information
```

---

# Key Learnings

Through this section, I developed a stronger understanding of:

- Local component state
- React re-rendering
- Functional state updates
- Managing arrays and objects
- Immutable state updates
- Event handling
- Controlled forms
- React Hooks
- API integration
- Asynchronous JavaScript
- Passing functions through props
- Building interactive applications
- Breaking applications into reusable components

---

# State Update Patterns

## Add

```javascript
setItems((prev) => [...prev, newItem]);
```

## Delete

```javascript
setItems((prev) => prev.filter((item) => item.id !== id));
```

## Update

```javascript
setItems((prev) =>
  prev.map((item) => (item.id === id ? { ...item, value: newValue } : item)),
);
```

These patterns are important when working with arrays and objects in React state.

---

# Technologies Used

- HTML5
- CSS3
- JavaScript ES6+
- React.js
- React Hooks
- Vite
- Formik
- Material UI
- REST APIs
- npm

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

This folder represents my transition from static React components to interactive and dynamic React applications.

The main focus was understanding:

```text
Data
  ↓
State
  ↓
User Interaction
  ↓
State Update
  ↓
Component Re-render
  ↓
Updated UI
```

The concepts practiced in this folder created the foundation for the next stage of my learning journey: managing shared and global application state using Redux Toolkit.

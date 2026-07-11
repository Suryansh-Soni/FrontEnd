# React Fundamentals and Component Practice

This folder contains my initial React.js learning journey, where I started understanding the fundamentals of component-based frontend development.

The main purpose of this section was to understand how React applications are structured, how reusable components are created, and how data is passed between components.

Instead of only learning concepts theoretically, I implemented each concept through small components and practical exercises.

---

## Topics Covered

### JSX

JSX allows us to write HTML-like syntax inside JavaScript.

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

JSX makes it easier to describe and build user interfaces using JavaScript.

---

## Functional Components

I learned how to create reusable functional components.

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}

export default Welcome;
```

A React application can be divided into multiple small components, with each component responsible for a specific part of the user interface.

---

## Props

Props are used to pass data from a parent component to a child component.

```jsx
function Product({ title, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Price: {price}</p>
    </div>
  );
}
```

Usage:

```jsx
<Product title="Laptop" price={50000} />
```

This helped me understand how reusable components can display different data.

---

## Component Reusability

Instead of creating the same UI multiple times, React allows us to create a component once and reuse it.

```jsx
<Product title="Laptop" price={50000} />
<Product title="Phone" price={25000} />
<Product title="Headphones" price={5000} />
```

This makes applications easier to maintain and scale.

---

## Conditional Rendering

I learned how to display different content based on conditions.

```jsx
function Message({ isLoggedIn }) {
  return <h2>{isLoggedIn ? "Welcome Back" : "Please Login"}</h2>;
}
```

Conditional rendering allows the UI to respond dynamically to application data.

---

## Rendering Lists

I practiced rendering multiple elements using the JavaScript `map()` method.

```jsx
const products = ["Laptop", "Phone", "Headphones"];

function ProductList() {
  return (
    <ul>
      {products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}
```

---

## Keys in React

Keys help React identify individual elements while rendering lists.

```jsx
<li key={product.id}>{product.name}</li>
```

A unique key helps React efficiently update the user interface.

---

## Event Handling

I learned how React handles user interactions.

```jsx
function Button() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

Events practiced include:

- `onClick`
- `onChange`
- `onSubmit`

---

## Component Composition

I learned how multiple smaller components can be combined to create a larger application.

```jsx
function App() {
  return (
    <>
      <Navbar />
      <ProductList />
      <Footer />
    </>
  );
}
```

This helped me understand the component-based architecture used in modern React applications.

---

# Practice Components

During this phase, I created multiple small components to understand React fundamentals.

These included:

- Product Cards
- Product Listings
- Dynamic Pricing Components
- Message Boxes
- Reusable Buttons
- Conditional UI Components
- Basic Forms

---

# Key Concepts Learned

Through this section, I developed an understanding of:

- How React applications are structured
- JSX syntax
- Functional components
- Passing data using props
- Reusing components
- Conditional rendering
- Rendering lists
- Using keys
- Handling user events
- Component composition
- Organizing UI into smaller components

---

# Basic React Flow

```text
Application
    ↓
Components
    ↓
Props
    ↓
Rendered User Interface
```

As applications grow, components can be combined and reused to create more complex interfaces.

---

# Technologies Used

- HTML5
- CSS3
- JavaScript
- React.js
- JSX
- Vite
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

This folder represents the beginning of my React.js learning journey.

The focus was on building a strong foundation in:

- Components
- JSX
- Props
- Events
- Conditional rendering
- Lists
- Component reusability

These fundamentals became the foundation for learning React state, Hooks, API integration, and Redux Toolkit in the next stages of my frontend development journey.

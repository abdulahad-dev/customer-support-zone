# React Concepts

### 1. What is JSX, and why is it used?

JSX lets you write HTML-like syntax in JavaScript, making UI code easier to read and maintain. React converts it to standard JavaScript.

### 2. Difference between State and Props

- **State:** Mutable data inside a component.
- **Props:** Read-only data passed from parent to child.

### 3. What is useState hook?

`useState` adds state to functional components. Returns current value and a function to update it, triggering a re-render.

### 4. Sharing state between components

Lift state to a common parent and pass as props, or use Context API/Redux for global state.

### 5. Event handling in React

Use camelCase events with functions: `onClick={handleClick}`. React manages events efficiently with synthetic events.

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Parent Component
const ParentComponent = () => {
  const [count, setCount] = useState(0); // Using Hooks (useState)

  // Function to be called from JSX
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Component Lifecycle (useEffect)
  useEffect(() => {
    console.log('Component mounted or updated');
    return () => {
      console.log('Component will unmount');
    };
  }, [count]); // Runs when `count` changes

  // Variables in JSX
  const message = `You clicked ${count} times`;

  return (
    <div>
      <h1>Parent Component</h1>
      <p>{message}</p>
      <button onClick={incrementCount}>Increment Count</button>
      {/* Passing Props to Child Component */}
      <ChildComponent count={count} />
    </div>
  );
};

// Child Component
const ChildComponent = ({ count }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Count from Parent: {count}</p>
    </div>
  );
};

// Rendering the Parent Component to the DOM
ReactDOM.render(<ParentComponent />, document.getElementById('root'));

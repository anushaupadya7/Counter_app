import React from 'react';
import './Counter.css';

function Counter({ username, onLogout }) {
  const [count, setCount] = React.useState(0);

  return (
    <div className="Counter">
      <h1>Hello, {username}!</h1>
      <p>Count: {count}</p>
      <div className="Counter__buttons">
        <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
        <button type="button" onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <button type="button" className="Counter__logout-button" onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Counter;

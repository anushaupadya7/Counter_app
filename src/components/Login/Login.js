import React, { useState } from 'react';
import './Login.css';

const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={e => {
        e.preventDefault();
        onSubmit(username);
      }}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
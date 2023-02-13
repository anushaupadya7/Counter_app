import React, { useState } from 'react';
import Login from './components/Login/Login';
import Counter from './components/Counter/Counter';

function App() {
  const [username, setUsername] = useState(null);

  return username
    ? <Counter username={username} onLogout={() => setUsername(null)} />
    : <Login onSubmit={setUsername} />;
}

export default App;

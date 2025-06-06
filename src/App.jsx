import { useState } from 'react';
import logo from './assets/logo.png';
import './App.css';
import Register from './Register';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1>Frendr</h1>
      </div>

      <div className="form-container">
        <h1>User Registration</h1>
        <Register />
      </div>
    </>
  );
}

export default App;

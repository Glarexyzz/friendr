import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div id="navigation">
          <img src={logo} className="logo" alt="logo" />
          <h1 id="nav-title">frendr</h1>
      </div>
  )
}

export default App

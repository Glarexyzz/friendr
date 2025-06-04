import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={logo} className="logo" alt="logo" />
      </div>
      <h1>Frendr</h1>
    </>
  )
}

export default App

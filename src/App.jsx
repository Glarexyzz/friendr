import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
       <Route path='/' element={<Dashboard />} />
       <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App

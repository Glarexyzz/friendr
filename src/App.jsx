import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/App.css';

import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import AndyProfile from './pages/AndyProfile' 

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/andy' element={<AndyProfile />} /> 
      </Routes>
    </Router>
  )
}

export default App
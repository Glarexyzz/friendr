import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/App.css';

import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import AndyProfile from './pages/AndyProfile'
import Finder from './pages/Finder'
import AndyProfile from './pages/AndyProfile' 
import Register from './Register';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/andy' element={<AndyProfile />} /> 
        <Route path='/finder' element={<Finder />} />
        <Route path='register' element={Register }/>
      </Routes>
    </Router>
  )
}

export default App
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
       <Route exact path='/' Component={Dashboard} />
       <Route exact path='/profile' Component={Profile} />
      </Routes>
    </Router>
  )
}

export default App

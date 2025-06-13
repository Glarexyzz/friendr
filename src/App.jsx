import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AndyProfile from './pages/AndyProfile';
import JamieProfile from './pages/JamieProfile'; 
import TaylorProfile from './pages/TaylorProfile';
import MasonProfile from './pages/MasonProfile'; 
import LoganProfile from './pages/LoganProfile';  
import OliviaProfile from './pages/OliviaProfile';
import EmmaProfile from './pages/EmmaProfile';  
import AvaProfile from './pages/AvaProfile'; 
import Finder from './pages/Finder';
import Register from './Register';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/profile/andy" element={<AndyProfile />} />
        <Route path="/profile/jamie" element={<JamieProfile />} />
        <Route path="/profile/taylor" element={<TaylorProfile />} />
        <Route path="/profile/mason" element={<MasonProfile />} />
        <Route path="/profile/logan" element={<LoganProfile />} />
        <Route path="/profile/olivia" element={<OliviaProfile />} />
        <Route path="/profile/emma" element={<EmmaProfile />} />
        <Route path="/profile/ava" element={<AvaProfile />} />
        <Route path='/finder' element={<Finder />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
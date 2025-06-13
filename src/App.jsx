import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ProfileGen from './pages/ProfileGen';
import Finder from './pages/Finder';
import Register from './Register';
import { LikedProfilesProvider } from './contexts/LikedProfilesContext';
import LikedProfiles from './pages/LikedProfiles'; 

function App() {
  return (
    <LikedProfilesProvider>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile/:id' element={<ProfileGen />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/liked-profiles' element={<LikedProfiles />} />
          <Route path='/finder' element={<Finder />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </LikedProfilesProvider>
  );
}

export default App;
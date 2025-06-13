// Navigation.jsx
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import profile from '../assets/profile.svg';
import { useLikedProfiles } from '../contexts/LikedProfilesContext';
import '../styles/Navigation.css';


function Navigation() {
  const { likedProfiles } = useLikedProfiles();

  return (
    <div id="navigation">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <h1 id="nav-title">frendr</h1>
      
      <div className="profile-nav-section">
        <Link to="/liked-profiles" className="liked-profiles-badge">
          ❤️ {likedProfiles.length > 0 && (
            <span className="liked-count">{likedProfiles.length}</span>
          )}
        </Link>
        
        <Link to="/profile">
          <img src={profile} className="profile" alt="Your profile" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
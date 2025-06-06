import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import profile from '../assets/profile.svg'

function Navigation() {
  return (
    <div id="navigation">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <h1 id="nav-title">frendr</h1>
      <Link to="/profile">
        <img src={profile} className="profile" />
      </Link>
    </div>
  );
}

export default Navigation
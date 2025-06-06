import logo from '../assets/logo.png'
import profile from '../assets/profile.svg'

function Navigation() {
  return (
    <div id="navigation">
      <a href="/">
        <img src={logo} className="logo" alt="logo" />
      </a>
      <h1 id="nav-title">frendr</h1>
      <a href="/profile">
        <img src={profile} className="profile" />
      </a>
    </div>
  );
}

export default Navigation
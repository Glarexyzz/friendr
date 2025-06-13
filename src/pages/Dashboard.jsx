import { useNavigate } from 'react-router-dom';
import { profiles } from '../data/profiles.js';
import atYourUniversity from '../assets/atyouruniversity.jpg';
import freeToday from '../assets/freetoday.jpg';
import recentlyActive from '../assets/recentlyactive.jpg';
import within10Miles from '../assets/within10miles.jpg';
import '../styles/Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleFindFriend = () => {
    navigate('/finder');
  };

  const handleCategoryClick = () => {
    // Temporary logic, just for presenting
    // Pick a random profile
    const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];
    // Navigate using the id we defined
    navigate(`/profile/${randomProfile.id}`);
  };

  return (
    <div className="dashboard-container">
      <div className="category-grid">
        {/* Top Left */}
        <div 
          className="category-card top-left" 
          onClick={() => handleCategoryClick('at-your-university')}
          style={{ backgroundImage: `url(${atYourUniversity})` }}
        >
          <div className="category-overlay">
            <h3>At Your University</h3>
          </div>
        </div>

        {/* Top Right */}
        <div 
          className="category-card top-right" 
          onClick={() => handleCategoryClick('free-today')}
          style={{ backgroundImage: `url(${freeToday})` }}
        >
          <div className="category-overlay">
            <h3>Free Today</h3>
          </div>
        </div>

        {/* Central Button */}
        <div className="center-button">
          <button 
            className="find-friend-btn" 
            onClick={handleFindFriend}
          >
            Make a Connection
          </button>
        </div>

        {/* Bottom Left */}
        <div 
          className="category-card bottom-left" 
          onClick={() => handleCategoryClick('recently-active')}
          style={{ backgroundImage: `url(${recentlyActive})` }}
        >
          <div className="category-overlay">
            <h3>Recently Active</h3>
          </div>
        </div>

        {/* Bottom Right */}
        <div 
          className="category-card bottom-right" 
          onClick={() => handleCategoryClick('within-10-miles')}
          style={{ backgroundImage: `url(${within10Miles})` }}
        >
          <div className="category-overlay">
            <h3>Within 10 Miles</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
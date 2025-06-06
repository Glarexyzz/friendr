import '../styles/dashboard.css';
import { useNavigate } from 'react-router-dom'; 

function Dashboard() {
  // Initialize navigate function
  const navigate = useNavigate(); 

  const handleFindFriend = () => {
    navigate('/andy'); 
  };

  // Find friend button
  return (
    <div className="dashboard-container">
      <div className="button-container">
        <button 
          className="find-friend-btn" 
          onClick={handleFindFriend}
        >
          Find Friend
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
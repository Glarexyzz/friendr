import '../styles/Dashboard.css';
import { useNavigate } from 'react-router-dom'; 

function Dashboard() {
  // Initialize navigate function
  const navigate = useNavigate(); 

  const handleFindFriend = () => {
    navigate('/finder'); 
  };

  // Find friend button
  return (
    <div className="dashboard-container">
      <div className="button-container">
        <button 
          className="find-friend-btn" 
          onClick={handleFindFriend}
        >
          Make a Connection
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
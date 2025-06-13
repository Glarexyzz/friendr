import { useLikedProfiles } from '../contexts/LikedProfilesContext';
import { Link } from 'react-router-dom';
import profileIcon from '../assets/profile.svg';
import '../styles/LikedProfiles.css';

function LikedProfiles() {
  const { likedProfiles, removeLikedProfile } = useLikedProfiles();

  return (
    <div className="liked-profiles-page">
      <div className="liked-profiles-content">
        <h1>Your Liked Profiles</h1>
        
        {likedProfiles.length === 0 ? (
          <p className="empty-state">You haven't liked any profiles yet</p>
        ) : (
          <div className="liked-profiles-list">
            {likedProfiles.map(profile => (
              <div key={profile.id} className="liked-profile-card">
                <img src={profileIcon} alt={profile.name} className="profile-avatar" />
                <div className="profile-info">
                  <h3>{profile.name}</h3>
                  <p>Age: {profile.age}</p>
                  <p>Interests: {profile.interests}</p>
                </div>
                <div className="button-group">
                  <button 
                    onClick={() => removeLikedProfile(profile.id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                  <Link to={`/profile/${profile.id}`} className="view-button">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LikedProfiles;
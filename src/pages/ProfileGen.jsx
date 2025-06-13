/* Profile template */
import { useState, useEffect } from 'react';
import profileIcon from '../assets/profile.svg';
import heartIcon from '../assets/heart.png';
import dislikeIcon from '../assets/dislike.png';
import { useProfileNavigation } from '../hooks/useProfileNavigation';
import '../styles/Profile.css';
import '../styles/LikeDislike.css';

function Profile() {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const { getNextProfile, getPreviousProfile, currentProfile } = useProfileNavigation();

  useEffect(() => {
    // Reset like/dislike states when profile changes
    setLiked(false);
    setDisliked(false);
  }, [currentProfile]);

  const handleLike = () => {
    setLiked(true);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(true);
    setLiked(false);
    setTimeout(() => {
      getNextProfile();
    }, 300); // Small delay for visual feedback
  };

  if (!currentProfile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="profile-page">
      <h1>{currentProfile.name}'s Profile</h1>
      <div className="profile-container">
        <div className="avatar-container">
          <button 
            className={`dislike-btn ${disliked ? 'disliked' : ''}`}
            onClick={handleDislike}
            aria-label="Dislike"
            disabled={liked || disliked}
          >
            <img src={dislikeIcon} alt="Dislike" className="icon-img"/>
          </button>
          
          <img src={profileIcon} alt={currentProfile.name} className="profile-avatar" />
          
          <button 
            className={`like-btn ${liked ? 'liked' : ''}`}
            onClick={handleLike}
            aria-label="Like"
            disabled={liked || disliked}
          >
            <img src={heartIcon} alt="Like" className="icon-img"/>
          </button>
        </div>
        
        <div className="profile-info"> 
          <p><span className="label">Name:</span> {currentProfile.name}</p>
          <p><span className="label">Age:</span> {currentProfile.age}</p>
          <p><span className="label">Interests:</span> {currentProfile.interests}</p>
          {currentProfile.university && (
            <p><span className="label">University:</span> {currentProfile.university}</p>
          )}
        </div>

        <div className="profile-nav-buttons">
          <button onClick={getPreviousProfile} className="nav-button previous">
            ← Previous
          </button>
          <button onClick={getNextProfile} className="nav-button next">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
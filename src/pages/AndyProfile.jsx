import { useState } from 'react';
import profileIcon from '../assets/profile.svg';   // Import profile icon
import heartIcon from '../assets/heart.png';       // Import heart icon
import dislikeIcon from '../assets/dislike.png';   // Import dislike icon
import '../styles/AndyProfile.css';
import '../styles/LikeDislike.css';

function AndyProfile() {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(true);
    setLiked(false);
  };

  return (
    <div className="andy-profile">
      <h1>Andy's Profile</h1>
      <div className="profile-container">
        <div className="avatar-container">
          <button 
            className={`dislike-btn ${disliked ? 'disliked' : ''}`}
            onClick={handleDislike}
            aria-label="Dislike"
          >
            <img 
              src={dislikeIcon} 
              alt="Dislike" 
              className="icon-img"
            />
          </button>
          
          <img src={profileIcon} alt="Andy" className="profile-avatar" />
          
          <button 
            className={`like-btn ${liked ? 'liked' : ''}`}
            onClick={handleLike}
            aria-label="Like"
          >
            <img 
              src={heartIcon} 
              alt="Like" 
              className="icon-img"
            />
          </button>
        </div>
        
        <div className="profile-info">
          <p><span className="label">Name:</span> Andy Smith</p>
          <p><span className="label">Age:</span> 28</p>
          <p><span className="label">Interests:</span> Tennis, Coding, Climbing</p>
        </div>
      </div>
    </div>
  );
}

export default AndyProfile;
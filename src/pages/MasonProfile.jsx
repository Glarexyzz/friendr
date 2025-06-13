import { useState } from 'react';
import profileIcon from '../assets/profile.svg';
import heartIcon from '../assets/heart.png';
import dislikeIcon from '../assets/dislike.png';
import '../styles/Profile.css';
import '../styles/LikeDislike.css';

function MasonProfile() {
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
      <h1>Mason's Profile</h1>
      <div className="profile-container">
        <div className="avatar-container">
          <button 
            className={`dislike-btn ${disliked ? 'disliked' : ''}`}
            onClick={handleDislike}
            aria-label="Dislike"
          >
            <img src={dislikeIcon} alt="Dislike" className="icon-img"/>
          </button>
          
          <img src={profileIcon} alt="Mason" className="profile-avatar" />
          
          <button 
            className={`like-btn ${liked ? 'liked' : ''}`}
            onClick={handleLike}
            aria-label="Like"
          >
            <img src={heartIcon} alt="Like" className="icon-img"/>
          </button>
        </div>
        
        <div className="profile-info">
          <p><span className="label">Name:</span> Mason Davis</p>
          <p><span className="label">Age:</span> 23</p>
          <p><span className="label">Interests:</span> Football, Cooking, Travel</p>
          <p><span className="label">University:</span> University of Bristol</p>
        </div>
      </div>
    </div>
  );
}

export default MasonProfile;
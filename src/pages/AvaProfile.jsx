import { useState } from 'react';
import profileIcon from '../assets/profile.svg';
import heartIcon from '../assets/heart.png';
import dislikeIcon from '../assets/dislike.png';
import '../styles/Profile.css';
import '../styles/LikeDislike.css';

function AvaProfile() {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  return (
    <div className="andy-profile">
      <h1>Ava's Profile</h1>
      <div className="profile-container">
        <div className="avatar-container">
          <button 
            className={`dislike-btn ${disliked ? 'disliked' : ''}`}
            onClick={() => { setDisliked(true); setLiked(false); }}
            aria-label="Dislike"
          >
            <img src={dislikeIcon} alt="Dislike" className="icon-img"/>
          </button>
          
          <img src={profileIcon} alt="Ava" className="profile-avatar" />
          
          <button 
            className={`like-btn ${liked ? 'liked' : ''}`}
            onClick={() => { setLiked(true); setDisliked(false); }}
            aria-label="Like"
          >
            <img src={heartIcon} alt="Like" className="icon-img"/>
          </button>
        </div>
        
        <div className="profile-info">
          <p><span className="label">Name:</span> Ava Anderson</p>
          <p><span className="label">Age:</span> 22</p>
          <p><span className="label">Interests:</span> Swimming, Piano, Fashion Design</p>
          <p><span className="label">University:</span> University College London</p>
        </div>
      </div>
    </div>
  );
}

export default AvaProfile;
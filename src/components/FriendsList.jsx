import { useLikedProfiles } from '../contexts/LikedProfilesContext';
import { Link } from 'react-router-dom';
import profileIcon from '../assets/profile.svg';

function FriendsList() {
  const { friends } = useLikedProfiles();

  return (
    <div className="friends-sidebar">
      <div className="sidebar-content">
        <h3>My Friends</h3>
        {friends.length === 0 ? (
          <p>No friends yet</p>
        ) : (
          <ul className="friends-list">
            {friends.map(friend => (
              <li key={friend.id}>
                <Link to={`/chat/${friend.id}`} className="friend-link">
                  <img src={profileIcon} alt={friend.name} className="friend-avatar" />
                  <span>{friend.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FriendsList;
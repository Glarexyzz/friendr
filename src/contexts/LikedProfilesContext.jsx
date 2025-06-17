import { createContext, useState, useContext } from 'react';

const LikedProfilesContext = createContext();

export function LikedProfilesProvider({ children }) {
  const [likedProfiles, setLikedProfiles] = useState([]);
  const [friends, setFriends] = useState([]);

  const addLikedProfile = (profile) => {
    // 50% chance to become friends
    if (Math.random() > 0.5) {
      setFriends(prev => [...prev, { ...profile, isFriend: true }]);
    }
    setLikedProfiles(prev => [...prev, profile]);
  };

  const removeLikedProfile = (profileId) => {
    setLikedProfiles(prev => prev.filter(p => p.id !== profileId));
    setFriends(prev => prev.filter(p => p.id !== profileId));
  };

  return (
    <LikedProfilesContext.Provider value={{ 
      likedProfiles, 
      friends,
      addLikedProfile, 
      removeLikedProfile 
    }}>
      {children}
    </LikedProfilesContext.Provider>
  );
}

export function useLikedProfiles() {
  return useContext(LikedProfilesContext);
}
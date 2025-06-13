import { createContext, useState, useContext } from 'react';

const LikedProfilesContext = createContext();

export function LikedProfilesProvider({ children }) {
  const [likedProfiles, setLikedProfiles] = useState([]);

  const addLikedProfile = (profile) => {
    setLikedProfiles(prev => [...prev, profile]);
  };

  const removeLikedProfile = (profileId) => {
    setLikedProfiles(prev => prev.filter(p => p.id !== profileId));
  };

  return (
    <LikedProfilesContext.Provider value={{ likedProfiles, addLikedProfile, removeLikedProfile }}>
      {children}
    </LikedProfilesContext.Provider>
  );
}

export function useLikedProfiles() {
  return useContext(LikedProfilesContext);
}
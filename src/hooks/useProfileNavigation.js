import { useNavigate, useParams } from 'react-router-dom';
import { profiles } from '../data/profiles';

export function useProfileNavigation() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentProfile = profiles.find(p => p.id === id) || profiles[0];

  const getAdjacentProfile = (direction) => {
    const currentIndex = profiles.findIndex(p => p.id === id);
    
    if (currentIndex === -1) {
      console.error('Profile not found!');
      return navigate(`/profile/${profiles[0].id}`);
    }

    const totalProfiles = profiles.length;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % totalProfiles;
    } else {
      newIndex = (currentIndex - 1 + totalProfiles) % totalProfiles;
    }
    
    const nextProfileId = profiles[newIndex].id;
    navigate(`/profile/${nextProfileId}`);
  };

  return {
    getNextProfile: () => getAdjacentProfile('next'),
    getPreviousProfile: () => getAdjacentProfile('previous'),
    currentProfile
  };
}
 export const profiles = [
  {
    id: 'andy',
    component: 'AndyProfile', // Matches your component name
    name: 'Andy Smith',
    age: 28,
    interests: 'Tennis, Coding, Climbing'
  },
  {
    id: 'jamie',
    component: 'JamieProfile',
    name: 'Jamie Wilson',
    age: 24,
    interests: 'Photography, Jazz, Hiking'
  },
  {
    id: 'taylor',
    component: 'TaylorProfile',
    name: 'Taylor Brown',
    age: 26,
    interests: 'Cooking, Travel, Movies'
  },

  // duplicating profiles
  {
    id: 'mason',
    component: 'MasonProfile',
    name: 'Mason Davis',
    age: 23,
    gender: 'male',
    interests: 'Football, Cooking, Travel',
    university: 'University of Bristol'
  },
  {
    id: 'logan',
    component: 'LoganProfile',
    name: 'Logan Miller',
    age: 20,
    gender: 'male',
    interests: 'Guitar, Hiking, Graphic Design',
    university: 'King\'s College London'
  },

  // Female Profiles
  {
    id: 'olivia',
    component: 'OliviaProfile',
    name: 'Olivia Wilson',
    age: 20,
    gender: 'female',
    interests: 'Painting, Yoga, Creative Writing',
    university: 'University of Cambridge'
  },
  {
    id: 'emma',
    component: 'EmmaProfile',
    name: 'Emma Taylor',
    age: 21,
    gender: 'female',
    interests: 'Dancing, Baking, Photography',
    university: 'University of Oxford'
  },
  {
    id: 'ava',
    component: 'AvaProfile',
    name: 'Ava Anderson',
    age: 22,
    gender: 'female',
    interests: 'Swimming, Piano, Fashion Design',
    university: 'University College London'
  },
  {
    id: 'sophia',
    component: 'SophiaProfile',
    name: 'Sophia Martinez',
    age: 19,
    gender: 'female',
    interests: 'Volunteering, Reading, Cycling',
    university: 'University of Warwick'
  }

];

export const getRandomProfile = (currentProfileId = null) => {
  const availableProfiles = currentProfileId 
    ? profiles.filter(profile => profile.id !== currentProfileId)
    : profiles;
  
  const randomIndex = Math.floor(Math.random() * availableProfiles.length);
  return availableProfiles[randomIndex];
};

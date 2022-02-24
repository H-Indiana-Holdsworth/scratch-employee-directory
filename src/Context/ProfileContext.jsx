import { createContext, useContext, useMemo, useState } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const currentProfile = getProfile();

  const [profile, setProfile] = useState({
    name: currentProfile.name,
    email: currentProfile.email,
    bio: currentProfile.bio,
    birthday: currentProfile.birthday,
  });

  const value = useMemo(() => {
    profile, setProfile;
  }, [profile]);

  <ProfileContext.Provider value={value}> {children} </ProfileContext.Provider>;
}

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useProfile must be used within ProfileProvider');
  }

  return context;
};

export { ProfileProvider, useProfile };

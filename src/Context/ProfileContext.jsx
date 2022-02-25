import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();

function ProfileProvider({ children }) {
  // need a useEffect because our getProfile fxn is an async await, its like fetch pokemon
  // we set the profile with an empty object to satisfy supabase
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const resp = await getProfile();
        if (resp.length > 0) {
          setProfile(resp);
        }
      } catch (error) {
        setProfile({ name: '', email: '', bio: '', birthday: '' });
      }
    };
    fetchProfile();
  }, []);

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });

  // returns a memoized value. useMemo will only recompute value when profile changes. This helps to avoid expensive calculations on every render
  const value = useMemo(() => {
    profile, setProfile;
  }, [profile]);

  return <ProfileContext.Provider value={value}> {children} </ProfileContext.Provider>;
}

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useProfile must be used within ProfileProvider');
  }

  return context;
};

export { ProfileProvider, useProfile };

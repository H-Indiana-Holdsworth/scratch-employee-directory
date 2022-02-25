import { createContext, useContext, useEffect, useState } from 'react';
import { getProfile } from '../services/profiles';
import { useUser } from './UserContext';

const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });

  // need a useEffect because our getProfile fxn is an async await, its like fetch pokemon
  // we set the profile with an empty object to satisfy supabase
  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const resp = await getProfile();
        if (resp.length > 0) {
          setProfile(resp[0]);
        }
      } catch (error) {
        setProfile({ name: '', email: '', bio: '', birthday: '' });
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  const value = { profile, setProfile, loading };

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

import { useContext, createContext, useState } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

function UserProvider({ children }) {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be defined within a UserContext Provider');
  }

  return context;
};

export { UserProvider, useUser };

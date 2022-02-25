import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import { signOutUser } from '../../services/users';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    await signOutUser();
    setUser({});
  };

  return (
    <div className="header">
      <h2>Acme Employee Directory</h2>

      <div className="conditional">
        {user ? (
          <>
            <p>You are signed in as {user.email} </p>
            <button onClick={handleLogout}>Sign Out</button>
          </>
        ) : (
          <>
            <p>Not signed in</p>
            <Link to="/login">Sign In</Link>
          </>
        )}
      </div>
    </div>
  );
}

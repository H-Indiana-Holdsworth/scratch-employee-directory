import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserForm from '../../Components/UserForm/UserForm';
import { useUser } from '../../Context/UserContext';
import { signInUser, signUpUser } from '../../services/users';
import './Auth.css';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const handleAuth = async (email, password) => {
    // eslint-disable-next-line no-useless-catch
    try {
      if (isSigningUp) {
        // sign user up in supabase
        await signUpUser(email, password);
        // redirect to confirm email
        history.push('/confirm-email');
      } else {
        // if not, sign in user
        const resp = await signInUser(email, password);
        // set signed in user into context
        setUser({ id: resp.id, email: resp.email });
        // redirect to profile
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <UserForm onSubmit={handleAuth} label={isSigningUp ? 'Sign Up' : 'Sign In'} />

      {isSigningUp ? (
        <p>
          Have an account? <Link to="/login">Sign In</Link>
        </p>
      ) : (
        <p>
          Need an account? <Link to="/register">Sign Up</Link>
        </p>
      )}
    </div>
  );
}

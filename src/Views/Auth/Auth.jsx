import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import './Auth.css';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { user } = useUser();

  return (
    <>
      if (isSigningUp){' '}
      {
        // sign user up in supabase
        //
      }
    </>
  );
}

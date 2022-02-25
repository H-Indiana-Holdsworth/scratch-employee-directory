import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createProfile, updateProfile } from '../../services/profiles';
import CreateProfile from '../CreateProfile/CreateProfile';

export default function Profile({ isEditing = false }) {
  const history = useHistory();

  const handleProfile = async ({ name, email, bio, birthday }) => {
    if (isEditing) {
      await updateProfile({ name, email, bio, birthday });
      history.push('/profile');
    } else {
      // we will call the create profile function from services
      await createProfile({ name, email, bio, birthday });
      history.push('/profile');
    }
  };
  return (
    <>
      <CreateProfile onSubmit={handleProfile} />
    </>
  );
}

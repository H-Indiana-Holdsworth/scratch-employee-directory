import React from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../Context/ProfileContext';
import { useUser } from '../../Context/UserContext';
import { getProfile } from '../../services/profiles';

export default function CreateProfile({ isEditing = false }) {
  const history = useHistory();
  const { profile } = useProfile();

  const handleProfile = async ({ name, email, bio, birthday }) => {
    // if a user is editing their profile
    if (isEditing) {
      // a form with all of their information will show up
      await getProfile();
      // if they click the save changes button, we will call our update profile function
    } else {
      // if not
      // a blank form will show up
      // when they click create profile
      // we will call the create profile function from services
    }
  };

  return (
    <>
      <h2>Welcome!</h2>
      <form className="create-profile-form">
        <label>
          Name
          <input type="text"></input>
        </label>
        <label>
          Email
          <input type="text" disabled="disabled"></input>
        </label>
        <label>
          Birthday
          <input type="date"></input>
        </label>
        <label>
          Bio
          <textarea type="text"></textarea>
        </label>
        <button className="create-profile-btn">Create Profile</button>
      </form>
    </>
  );
}

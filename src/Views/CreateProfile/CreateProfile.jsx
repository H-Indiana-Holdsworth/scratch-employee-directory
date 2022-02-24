import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';

export default function CreateProfile({ isEditing = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const handleProfile = async({ name, email, bio, birthday });
  // if a user is editing their profile
  // a form with all of their information will show up
  // if they click the save changes button, we will call our update profile function

  // if not
  // a blank form will show up
  // when they click create profile
  // we will call the create profile function from services

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

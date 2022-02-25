import React from 'react';
import { useProfile } from '../../Context/ProfileContext';
import { useUser } from '../../Context/UserContext';
import useForm from '../../Hooks/UseForm';

export default function CreateProfile({ onSubmit }) {
  const { user } = useUser();
  const { profile } = useProfile();

  const { formState, handleFormChange } = useForm({
    name: '',
    email: user.email,
    bio: '',
    birthday: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, bio, birthday } = formState;

    await onSubmit({ name, email, bio, birthday });
  };

  const editProfile = (
    <form onSubmit={handleSubmit} className="edit-profile-form">
      <label>
        Name
        <input
          id="name"
          name="name"
          type="text"
          value={formState.name}
          onChange={handleFormChange}
        />
      </label>
      <label>
        Email
        <input id="email" name="email" type="text" disabled="disabled" value={formState.email} />
      </label>
      <label>
        Birthday
        <input
          id="birthday"
          name="birthday"
          type="date"
          value={formState.birthday}
          onChange={handleFormChange}
        />
      </label>
      <label>
        Bio
        <textarea
          id="bio"
          name="bio"
          type="text"
          value={formState.bio}
          onChange={handleFormChange}
        />
      </label>
      <button className="save-changes-btn">Edit Profile</button>
    </form>
  );

  const createProfile = (
    <>
      <h2>Welcome!</h2>
      <form onSubmit={handleSubmit} className="create-profile-form">
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

  return (
    // if a user is editing their profile
    // a form with all of their information will show up
    // if they click the save changes button, we will call our update profile function

    // if not
    // when they click create profile
    // a blank form will show up
    <>{profile.email ? editProfile : createProfile}</>
  );
}

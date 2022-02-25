import React from 'react';
import useForm from '../../Hooks/UseForm';

export default function CreateProfile({ onSubmit }) {
  const { formState, handleFormChange } = useForm({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { name, email, bio, birthday } = formState;
  // };

  return (
    // if a user is editing their profile
    // a form with all of their information will show up
    // if they click the save changes button, we will call our update profile function

    // if not
    // when they click create profile
    // a blank form will show up
    <>
      if (isEditing){' '}
      {
        <form onSubmit={onSubmit} className="edit-profile-form">
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
            <input id="email" name="email" type="text" disabled="disabled" />
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
          <button className="save-changes-btn">Create Profile</button>
        </form>
      }{' '}
      else{' '}
      {
        <>
          <h2>Welcome!</h2>
          <form onSubmit={onSubmit} className="create-profile-form">
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
      }
    </>
  );
}

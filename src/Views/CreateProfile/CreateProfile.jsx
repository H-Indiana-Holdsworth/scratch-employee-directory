import React from 'react';

export default function CreateProfile() {
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

import React from 'react';

export default function EditProfile() {
  return (
    <>
      <h2>Welcome!</h2>
      <form className="edit-profile-form">
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
        <button className="edit-profile-btn">Save Changes</button>
      </form>
    </>
  );
}

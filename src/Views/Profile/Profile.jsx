import React from 'react';

export default function Profile() {
  return (
    <>
      <form className="profile">
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
      </form>
    </>
  );
}

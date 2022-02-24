import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <h2>Acme Employee Directory</h2>

      <div className="conditional">
        <p>You are signed in as user</p>
        <button>Sign Out</button>

        <p>Not signed in</p>
        <button>Sign In</button>
      </div>
    </div>
  );
}

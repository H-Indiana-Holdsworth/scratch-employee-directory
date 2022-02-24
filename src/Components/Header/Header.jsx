import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <h2>Acme Employee Directory</h2>

      <div className="conditional">
        <p>You are signed in as user</p>
        <button>Sign Out</button>

        <p>Not signed in</p>
        <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
}

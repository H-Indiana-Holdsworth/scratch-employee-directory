import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>
        Welcome to the Acme Employee Directory. Make an account or sign in to access all of our cool
        stuff!
      </p>
      <Link to="/register">Sign Up</Link>
      {' or '}
      <Link to="/login">Login</Link>
    </div>
  );
}

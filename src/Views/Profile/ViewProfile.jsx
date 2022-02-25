import React from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../Context/ProfileContext';

export default function ViewProfile() {
  const { profile, loading } = useProfile();
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile/edit');
  };

  const userProfile = (
    <div>
      <p>Name: {profile.name}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>

      <button onClick={handleClick}>Edit Profile</button>
    </div>
  );

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && profile.email ? userProfile : ''}
    </div>
  );
}

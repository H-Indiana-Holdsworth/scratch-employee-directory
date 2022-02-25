import React from 'react';
import { useProfile } from '../../Context/ProfileContext';

export default function ViewProfile() {
  const { profile, loading } = useProfile();

  const userProfile = (
    <div>
      <p>Name: {profile.name}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && profile.email ? userProfile : ''}
    </div>
  );
}

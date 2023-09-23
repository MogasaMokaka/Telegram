import React from 'react';
import './Profile.css';

function Profile(props) {
  return (
    <div className="profile">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
      <p>Interests: {props.interests.join(', ')}</p>
    </div>
  );
}

export default Profile;
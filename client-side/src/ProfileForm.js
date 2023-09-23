import React, { useState } from 'react';
import './ProfileForm.css';
import axios from 'axios';

function ProfileForm(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const newProfile = { name, age, location, interests: interests.split(',') };
    const response = await axios.post('/api/profiles', newProfile);
    props.onSubmit({ id: response.data.id, ...newProfile });
  };

  return (
    <div className="profile-form">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={event => setAge(event.target.value)} />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={event => setLocation(event.target.value)} />
        </label>
        <label>
          Interests:
        </label>
        <input type="text" value={interests} onChange={event => setInterests(event.target.value)} />
        <p className="example">Example: hiking, reading, cooking</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;
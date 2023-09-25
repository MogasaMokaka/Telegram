import React, { useState } from 'react';

const ProfileForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [interests, setInterests] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    // Check if any inputs are empty
    if (!name || !age || !location || !interests) {
      // Display error message
      setError('Please fill in all fields.');
    } else {
      // Submit form data
      onSubmit({ name, age, location, interests });
    }
  };

  return (
    <div className="profile-form">
      <h2>Create Your Profile</h2>
      {error && <p className="error">{error}</p>}
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
};

export default ProfileForm;
import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import Profile from './Profile';
import MatchList from './MatchList';
import FavoriteMatches from './FavoriteMatches';
import './App.css';

function App() {
  const [profile, setProfile] = useState(null);
  const [favoriteMatches, setFavoriteMatches] = useState([]);

  const matches = [
    { id: 1, name: 'Jane Doe', age: 23, location: 'San Francisco', interests: ['yoga', 'traveling'] },
    { id: 2, name: 'Bob Smith', age: 30, location: 'New York', interests: ['hiking', 'reading'] },
    { id: 3, name: 'Alice Johnson', age: 27, location: 'Los Angeles', interests: ['painting', 'music'] },
  ];

  const handleProfileSubmit = newProfile => {
    setProfile(newProfile);
  };

  const handleAddFavorite = match => {
    setFavoriteMatches([...favoriteMatches, match]);
  };

  const handleRemoveFavorite = match => {
    setFavoriteMatches(favoriteMatches.filter(favorite => favorite.id !== match.id));
  };

  return (
    <div className="app">
      {!profile && <ProfileForm onSubmit={handleProfileSubmit} />}
      {profile && <Profile profile={profile} />}
      {profile && <MatchList matches={matches} onAddFavorite={handleAddFavorite} />}
      {favoriteMatches.length > 0 && <FavoriteMatches matches={favoriteMatches} onRemoveFavorite={handleRemoveFavorite} />}
    </div>
  );
}

export default App;
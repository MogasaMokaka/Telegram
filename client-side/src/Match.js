import React from 'react';
import './Match.css';

function Match(props) {
  const handleAddFavorite = () => {
    props.onAddFavorite(props);
  };

  const handleRemoveFavorite = () => {
    props.onRemoveFavorite(props);
  };

  return (
    <div className="match">
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
      <p>Interests: {props.interests.join(', ')}</p>
      {props.onAddFavorite && <button onClick={handleAddFavorite}>Add Favorite</button>}
      {props.onRemoveFavorite && <button onClick={handleRemoveFavorite}>Remove Favorite</button>}
    </div>
  );
}

export default Match;
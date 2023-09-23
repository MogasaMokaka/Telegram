import React from 'react';
import Match from './Match';
import './FavoriteMatches.css';

function FavoriteMatches(props) {
  const handleRemoveFavorite = match => {
    props.onRemoveFavorite(match);
  };

  return (
    <div className="favorite-matches">
      <h2>Favorite Matches</h2>
      {props.favoriteMatches.length > 0 ? (
        props.favoriteMatches.map(match => (
          <Match key={match.id} {...match} onRemoveFavorite={handleRemoveFavorite} />
        ))
      ) : (
        <p>No favorite matches yet.</p>
      )}
    </div>
  );
}

export default FavoriteMatches;
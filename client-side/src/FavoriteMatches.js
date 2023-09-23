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
      {props.matches.length > 0 ? (
        <ul>
          {props.matches.map(match => (
            <li key={match.id}>
              <Match {...match} />
              <button onClick={() => handleRemoveFavorite(match)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite matches yet</p>
      )}
    </div>
  );
}

export default FavoriteMatches;
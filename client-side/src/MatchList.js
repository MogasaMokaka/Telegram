import React, { useState } from 'react';
import Match from './Match';
import './MatchList.css';

function MatchList(props) {
  const [matches, setMatches] = useState([
    { id: 1, name: 'Jane Doe', age: 23, location: 'San Francisco', interests: ['yoga', 'traveling'] },
    { id: 2, name: 'Bob Smith', age: 30, location: 'New York', interests: ['hiking', 'reading'] },
    { id: 3, name: 'Alice Johnson', age: 27, location: 'Los Angeles', interests: ['painting', 'music'] },
  ]);

  const handleAddFavorite = match => {
    props.onAddFavorite(match);
  };

  return (
    <div className="match-list">
      <h2>Matches</h2>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            <Match {...match} />
            <button onClick={() => handleAddFavorite(match)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MatchList;
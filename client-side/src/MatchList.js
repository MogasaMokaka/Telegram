import React from 'react';
import Match from './Match';
import './MatchList.css';

function MatchList(props) {
  const handleAddFavorite = match => {
    props.onAddFavorite(match);
  };

  return (
    <div className="match-list">
      <h2>Matches</h2>
      {props.matches.map(match => (
        <Match key={match.id} {...match} onAddFavorite={handleAddFavorite} />
      ))}
    </div>
  );
}

export default MatchList;
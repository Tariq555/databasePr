// SavedNames.js
import React from 'react';
import { getDatabase } from './database';

function SavedNames() {
  const savedNames = getDatabase();

  return (
    <div>
      <h2>Saved Names:</h2>
      <ul>
        {savedNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SavedNames;

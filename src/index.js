import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { saveNameToDatabase } from './database';
import './index.css';
import SavedNames from './SavedNames'; // Import the new component

function NameInput() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Saving name:', name);
    saveNameToDatabase(name);
    setName(''); // Clear the input field after saving the name
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleInputChange} />
      <button type="submit">Save</button>
    </form>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <NameInput />
    <SavedNames /> {SavedNames}
  </React.StrictMode>,
  document.getElementById('root')
);

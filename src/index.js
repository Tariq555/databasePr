import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function saveNameToDatabase(name) {
  // Code to save the name to the database
  // You can use the "database.js" file for this implementation
}

function NameInput() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveNameToDatabase(name);
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
  </React.StrictMode>,
  document.getElementById('root')
);

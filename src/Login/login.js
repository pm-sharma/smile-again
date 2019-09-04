import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Smile Again" />
        <p>
          Welocme <code>to</code> Smile Again.
        </p>
        <a
          className="App-link"
          href="/hey Wait i am comming"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go
        </a>
      </header>
    </div>
  );
}

export default App;

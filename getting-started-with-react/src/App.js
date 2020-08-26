import React from 'react';
import FirstComponent from './FirstComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstComponent text="First Header" />
        <FirstComponent text="Second Header" />
      </header>
    </div>
  );
}

export default App;

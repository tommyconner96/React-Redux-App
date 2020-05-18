import React from 'react';
import './App.css';
import Cats from './components/Cats'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h3>
          Random cat GIF!
        </h3>
        <h4>
          Click the 'Load New Cat' button to get a new cat image.
        </h4>
      </div>
      <div className='cats-container'>
        <Cats />
      </div>

    </div>
  );
}

export default App;

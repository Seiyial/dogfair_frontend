import React from 'react';
import logo from './dog.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ marginTop: 50, marginBottom: 50 }}>
          Lol welcome to DogFair
        </p>
        <a
          className="App-link"
          href="https://github.com/seiyial/dogfair_frontend/blob/master/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Documentation
        </a>

        <div className='dogfair-footer'>
          Icons made by&nbsp;
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
          </a>
            &nbsp;from&nbsp;
          <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
          </a>
          .
        </div>
      </header>
    </div>
  );
}

export default App;

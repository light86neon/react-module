import React from 'react';
import logo from './logo.svg';
import './App.css';


import { moviesService } from "./services";



function App() {
  React.useEffect(()=>{
    moviesService.getMovieDetailsById().then(console.log)
    fetch('http://api.themoviedb.org/3/discover/movie', {
      headers: {
        Authorization: 'Bearer ...'
      }
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

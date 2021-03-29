import React from 'react';
import Row from './Row.js';
import Banner from './Banner.js';
import request from './request.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title='Trending Now' fetchURL={request.fetchTrending} />
      <Row title='Action' fetchURL={request.fetchActionMovies} />
      <Row title='Comedy' fetchURL={request.fetchComedyMovies} />
      <Row title='Horror' fetchURL={request.fetchHorrorMovies} />
      <Row title='Romance' fetchURL={request.fetchRomanceMovies} />
      <Row title='Documentries' fetchURL={request.fetchDocumentaries} />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Row from './Components/Row/Row';
import Request from '../src/Components/Request/Request';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
        <Row title="NETFLIX ORIGINAL" 
        fetchUrl={Request.fetchNetflixOriginals}
        isLargeRow
        />
        <Row title="Trending Now" fetchUrl={Request.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={Request.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={Request.fetchActionMoviews}/>
        <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovie}/>
        <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries}/>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieHeading from './Components/MovieHeading';
import SearchBox from './Components/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [val, setVal] = useState("")

  const getMovieRequest = async () => {
    const url="http://www.omdbapi.com/?s=lord&apikey=ca4d40cb";
    const response = await fetch(url);
    const json = await response.json();
    setMovies(json.Search);
  }

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieHeading heading={"Movies"}/>
        <SearchBox/>
      </div>
      <div className="row flex-nowrap">
        <MovieList movies={movies}/>
      </div>
    </div>
  );
};

export default App;
 
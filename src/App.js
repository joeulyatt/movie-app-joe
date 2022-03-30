import React, { useEffect, useState } from 'react';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieHeading from './Components/MovieHeading';
import SearchBox from './Components/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [val, setVal] = useState("")

  const getMovieRequest = async (val) => {
    const url=`http://www.omdbapi.com/?s=${val}&apikey=ca4d40cb`;
    const response = await fetch(url);
    const json = await response.json();

    if (json.Search) {
      setMovies(json.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(val);
  }, [val]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieHeading heading="Movies"/>
        <SearchBox val={val} setVal={setVal}/>
      </div>
      <div className="row movies flex-nowrap">
        <MovieList movies={movies}/>
      </div>
    </div>
  );
};

export default App;
 
import React, { useEffect, useState } from 'react';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DefaultPic from './img/default-search-pic.png'
import DefaultFavourite from './img/default-favourite-pic.png'
import MovieHeading from './Components/MovieHeading';
import SearchBox from './Components/SearchBox';
import AddFavourites from './Components/AddFavourites';
import RemoveFavourites from './Components/RemoveFavourites';
import AlreadyFavouritedComponent from './Components/AlreadyFavourited';


const App = () => {
    const [movies, setMovies] = useState([{Poster: DefaultPic}]);
    const [favourites, setFavourites] = useState([{Poster: DefaultFavourite}]);
    const [alreadyFavourited, setAlreadyFavourited] = useState(false)
    const [val, setVal] = useState("")

    const getMovieRequest = async (val) => {
        const url=`http://www.omdbapi.com/?s=${val}&apikey=ca4d40cb`;
        const response = await fetch(url);
        const json = await response.json();

      if (json.Search) {
          setMovies(json.Search);
      } else if (!json.Search) {
        setMovies([{Poster: DefaultPic}])
      }
    };

    useEffect(() => {
        getMovieRequest(val);
    }, [val]);

    const handleAddFavourite = (movie) => {
        if (favourites.includes(movie)) {
            setAlreadyFavourited(true)
            setTimeout(() => {
                setAlreadyFavourited(false)
            }, 1000);
            return
        }
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
    };

    const handleRemoveFavourite = (movie) => {
        const newFavouriteList =  [...favourites];
        let index = newFavouriteList.indexOf(movie)
        newFavouriteList.splice(index, 1);
        setFavourites(newFavouriteList);
    };

  return (
    <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center ps-3 mt-4 mb-4 pe-5">
            <MovieHeading heading="Movies"/>
            <SearchBox val={val} setVal={setVal}/>
        </div>
        <div className="row movies flex-nowrap">
            <MovieList 
                movies={movies} 
                handleFavourites={handleAddFavourite} 
                FavouriteComponent={alreadyFavourited ? AlreadyFavouritedComponent : AddFavourites}
            />
        </div>
        <div className="row d-flex align-items-center ps-3 mt-4 mb-4">
            <MovieHeading heading="Favourites"/>
        </div>
        <div className="row movies flex-nowrap">
            <MovieList 
                movies={favourites}
                handleFavourites={handleRemoveFavourite} 
                FavouriteComponent={RemoveFavourites}
            />
        </div>
    </div>
  );
};

export default App;
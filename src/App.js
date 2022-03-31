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
    const [alreadyFavourited, setAlreadyFavourited] = useState(false);
    const [val, setVal] = useState("");
    const [initPic, setInitPic] = useState(true)

    const getMovieRequest = async (val) => {
        const url=`http://www.omdbapi.com/?s=${val}&apikey=ca4d40cb`;
        const response = await fetch(url);
        const json = await response.json();
        // Sets init pic if search box is empty
        if (json.Search) {
            setMovies(json.Search);
            setInitPic(false)
        } else if (!json.Search) {
            setMovies([{Poster: DefaultPic}])
            setInitPic(true)
        };
    };

    useEffect(() => {
        getMovieRequest(val);
    }, [val]);

    const handleAddFavourite = (movie) => {
        // Checks if movie is already favourited and adds overlay if true
        if (favourites.includes(movie)) {
            setAlreadyFavourited(true)
            setTimeout(() => {
                setAlreadyFavourited(false)
            }, 500);
            return
        };
        // Adds movie to favourites
        const newFavouriteList = [...favourites, movie];
        if (favourites.some(e => e.Poster === DefaultFavourite)) {newFavouriteList.splice(0)}
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
                FavouriteComponent={!initPic ? (alreadyFavourited ? AlreadyFavouritedComponent : AddFavourites) : null}
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
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import MovieHeading from './Components/MovieHeading';
import SearchBox from './Components/SearchBox';
import AddFavourites from './Components/AddFavourites';
import RemoveFavourites from './Components/RemoveFavourites';
import Footer from './Components/Footer';

import DefaultPic from './img/default-search-pic.png';
import DefaultFavourite from './img/default-favourite-pic.png';
import Logo from './img/logo.png';

const App = () => {
    const [movies, setMovies] = useState([{Poster: DefaultPic}]);
    const [favourites, setFavourites] = useState([{Poster: DefaultFavourite}]);
    const [val, setVal] = useState("");
    const [initPic, setInitPic] = useState(true);
    const [initFavouritePic, setInitFavouritePic] = useState(true);

    const getMovieRequest = async (val) => {
        const url=`http://www.omdbapi.com/?s=${val}&apikey=ca4d40cb`;
        const response = await fetch(url);
        const json = await response.json();
        setMovies(json.Search ? json.Search : [{Poster: DefaultPic}]);
        setInitPic(json.Search ? false : true);
    };

    useEffect(() => {
        getMovieRequest(val);
    }, [val]);

    const handleAddFavourite = (movie, idx) => {
        setInitFavouritePic(false);
        if (favourites.includes(movie)) return;
        const newFavouriteList = [...favourites, movie];
        if (favourites.some(e => e.Poster === DefaultFavourite)) {newFavouriteList.splice(0, 1)};
        setFavourites(newFavouriteList);
    };

    const handleRemoveFavourite = (movie, idx) => {
        const newFavouriteList =  [...favourites];
        newFavouriteList.splice(idx, 1);
        setFavourites(newFavouriteList);
    // Adds init pic if array is empty
        if (newFavouriteList.length === 0) 
            {setFavourites([{Poster: DefaultFavourite}])
            setInitFavouritePic(true)};
    };

    return (
        <div className="container-fluid movie-app">
            <div className="col d-flex justify-content-center">
                <img src={Logo} alt="" srcSet=""></img>
            </div>
            <hr></hr>
            <div className="row d-flex align-items-center ps-3 mt-4 mb-4 me-4">
                <MovieHeading heading="Movies"/>
                <SearchBox val={val} setVal={setVal}/>
            </div>
            <div className="row movies flex-nowrap">
                <MovieList 
                    movies={movies} 
                    handleFavourites={handleAddFavourite} 
                    FavouriteComponent={!initPic ? AddFavourites : null}
                    favourites={favourites}
                />
            </div>
            <div className="row d-flex align-items-center ps-3 mt-4 mb-4">
                <MovieHeading heading="Favourites"/>
            </div>
            <div className="row movies flex-nowrap">
                <MovieList 
                    movies={favourites}
                    handleFavourites={handleRemoveFavourite} 
                    FavouriteComponent={initFavouritePic ? null : RemoveFavourites}
                />
            </div>
            <Footer/>
        </div>
    );
};

export default App;
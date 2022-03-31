import React, { useEffect, useState } from 'react';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DefaultPic from './img/default-search-pic.png';
import DefaultFavourite from './img/default-favourite-pic.png';
import Logo from './img/logo.png';
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
    const [initPic, setInitPic] = useState(true);
    const [initFavouritePic, setInitFavouritePic] = useState(true);

    const getMovieRequest = async (val) => {
        const url=`http://www.omdbapi.com/?s=${val}&apikey=ca4d40cb`;
        const response = await fetch(url);
        const json = await response.json();
        if (json.Search) {
          setMovies(json.Search);
          setInitPic(false)
        } else if (!json.Search) {
          // Sets init pic if search box is empty
            setMovies([{Poster: DefaultPic}])
            setInitPic(true)
        };
    };

    useEffect(() => {
        getMovieRequest(val);
    }, [val]);

    const handleAddFavourite = (movie) => {
        // Checks if movie is already favourited and adds overlay if true
        setInitFavouritePic(false)
        if (favourites.includes(movie)) {
            setAlreadyFavourited(true)
            setTimeout(() => {
                setAlreadyFavourited(false)
            }, 500);
            return
        };
        // Adds movie to favourites
        const newFavouriteList = [...favourites, movie];
        if (favourites.some(e => e.Poster === DefaultFavourite)) {newFavouriteList.splice(0, 1)};
        setFavourites(newFavouriteList);
    };

    const handleRemoveFavourite = (movie) => {
        const newFavouriteList =  [...favourites];
        let index = newFavouriteList.indexOf(movie)
        newFavouriteList.splice(index, 1);
        setFavourites(newFavouriteList);
        // Checks if array is empty and adds init favourites pic if true
        if (newFavouriteList.length === 0) 
            {setFavourites([{Poster: DefaultFavourite}]) 
            setInitFavouritePic(true)} 
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
                  FavouriteComponent={initFavouritePic ? null : RemoveFavourites}
              />
          </div>
      </div>
  );
};

export default App;
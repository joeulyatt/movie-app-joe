import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TabGroup from './Components/TabGroup'
import MovieList from './Components/MovieList';
import MovieHeading from './Components/MovieHeading';
import SearchBox from './Components/SearchBox';
import AddFavourites from './Components/AddFavourites';
import RemoveFavourites from './Components/RemoveFavourites';
import Footer from './Components/Footer';

import DefaultPic from './img/default-search-pic.png';
import DefaultFavourite from './img/default-favourite-pic.png';
import Logo from './img/logo.png';


const types = ['Movies', 'TV Shows', 'Watchlist'];

const App = () => {
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);
    const [trending, setTrending] = useState([])
    const [favourites, setFavourites] = useState([{poster_path: DefaultFavourite}]);
    const [val, setVal] = useState("");
    const [initPic, setInitPic] = useState(true);
    const [initFavouritePic, setInitFavouritePic] = useState(true);
    const [activeTab, setActiveTab] = useState(types[0]);

    const getShowRequest = async (val) => {
        const url=`https://api.themoviedb.org/3/search/tv?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US&page=1&include_adult=false&query=${val}`
        const response = await fetch(url);
        const json = await response.json();
        setShows(json.results ? json.results : [{poster_path: DefaultPic}]);
        // setInitPic(json.results ? false : true);
    };

    const getMovieRequest = async (val) => {
        const url=`https://api.themoviedb.org/3/search/movie?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&query=${val}`
        const response = await fetch(url);
        const json = await response.json();
        setMovies(json.results ? json.results : [{poster_path: DefaultPic}]);
        setInitPic(json.results ? false : true);
    };

    const getTrending = async () => {
        const url= "https://api.themoviedb.org/3/trending/all/day?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6"
        const response = await fetch(url);
        const json = await response.json();
        setTrending(json.results)
    };


    useEffect(() => {
        getTrending()
    }, []);

    useEffect(() => {
        getMovieRequest(val);
        getShowRequest(val);
    }, [val]);

    const handleAddFavourite = (movie, idx) => {
        setInitFavouritePic(false);
        if (favourites.includes(movie)) return;
        const newFavouriteList = [...favourites, movie];
        if (favourites.some(e => e.poster_path.includes("default"))) {newFavouriteList.splice(0, 1)};
        setFavourites(newFavouriteList);
    };

    const handleRemoveFavourite = (movie, idx) => {
        const newFavouriteList =  [...favourites];
        newFavouriteList.splice(idx, 1);
        setFavourites(newFavouriteList);
        if (newFavouriteList.length === 0) 
            {setFavourites([{poster_path: DefaultPic}])
            setInitFavouritePic(true)};
    };

    return (


        <div className="container-fluid movie-app">
            <div className="col d-flex justify-content-center">
                <img src={Logo} alt="" srcSet=""></img>
            </div>
            <hr></hr>
            <div>
                {types.map(type => (
                <button
                    className={activeTab === type ? "myButtonActive" : "myButton"}
                    key={type}
                    active={activeTab === type}
                    onClick={() => setActiveTab(type)}
                >
                    <h1>{type}</h1>
                </button>
                ))}
                <SearchBox val={val} setVal={setVal}/>
            </div>

            {activeTab === 'TV Shows' ? 
            <>

            
            <div className="row d-flex align-items-center ps-3 mt-4 mb-4 me-4">
                <MovieHeading heading="TV Shows"/>
                
            </div>
            <div className="row movies flex-nowrap">
                <MovieList 
                    movies={shows} 
                    handleFavourites={handleAddFavourite} 
                    FavouriteComponent={AddFavourites}
                    favourites={favourites}
                />
            </div>
            <div className="row d-flex align-items-center ps-3 mt-4 mb-4 me-4">
                <MovieHeading heading="Trending"/>
            </div>
            <div className="row movies flex-nowrap">
                <MovieList 
                    movies={trending} 
                    handleFavourites={handleAddFavourite} 
                    FavouriteComponent={AddFavourites}
                    favourites={favourites}
                />
            </div>
            </>
                        
            :
            
            <>
            <div className="row d-flex align-items-center ps-3 mt-4 mb-4 me-4">
                <MovieHeading heading="Movies"/>
                <SearchBox val={val} setVal={setVal}/>
            </div>
            <div className="row movies flex-nowrap">
                <MovieList 
                    movies={movies} 
                    initPic={initPic}
                    defaultImg={DefaultPic}
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
                    initPic={initFavouritePic}
                    defaultImg={DefaultFavourite}
                    handleFavourites={handleRemoveFavourite} 
                    FavouriteComponent={initFavouritePic ? null : RemoveFavourites}
                />
            </div>
            <Footer/>
            </>

        }
        </div>
    );
};

export default App;
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


const types = ['Movies', 'TV Shows', 'Watchlist'];

const App = () => {
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTV, setTrendingTV] = useState([]);
    const [favourites, setFavourites] = useState([{poster_path: DefaultFavourite}]);
    const [val, setVal] = useState("");
    const [initFavouritePic, setInitFavouritePic] = useState(true);
    const [activeTab, setActiveTab] = useState(types[0]);

    const getShowRequest = async (val) => {
        const url=`https://api.themoviedb.org/3/search/tv?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US&page=1&include_adult=false&query=${val}`
        const response = await fetch(url);
        const json = await response.json();
        setShows(json.results ? json.results : [{poster_path: DefaultPic}]);
    };

    const getMovieRequest = async (val) => {
        const url=`https://api.themoviedb.org/3/search/movie?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&query=${val}`
        const response = await fetch(url);
        const json = await response.json();
        setMovies(json.results ? json.results : [{poster_path: DefaultPic}]);
    };

    const getTrendingMovies = async () => {
        const url= "https://api.themoviedb.org/3/movie/popular?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US&page=1"
        const response = await fetch(url);
        const json = await response.json();
        setTrendingMovies(json.results)
    };

    const getTrendingTV = async () => {
        const url = "https://api.themoviedb.org/3/tv/popular?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US&page=1"
        const response = await fetch(url);
        const json = await response.json();
        setTrendingTV(json.results)
    };

    useEffect(() => {
        getTrendingMovies()
        getTrendingTV()
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

    function handleMovieList() {
        if (activeTab === "Movies") {
        return movies
        } else if (activeTab === "TV Shows") {
        return shows
        } else if (activeTab === "Watchlist") {
        return favourites
        }
    }

    function handleTrendingList() {
        if (activeTab === "Movies") {
        return trendingMovies
        } else if (activeTab === "TV Shows") {
        return trendingTV
        } else if (activeTab === "Watchlist") {
        return favourites
        }
    }

    return (


        <div className="container-fluid movie-app">
            <div className="d-flex justify-content-between">
                <div class="mt-2">
                    <img src={Logo} alt="" srcSet="" height="100px" className="me-5"></img>
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
                </div>
                <SearchBox val={val} setVal={setVal}/>
            </div>
            

                <> 
                    {val && activeTab !== "Watchlist" ? 
                        <>
                            <div className="row movies flex-nowrap">
                                <MovieList 
                                    movies={handleMovieList()} 
                                    handleFavourites={handleAddFavourite} 
                                    FavouriteComponent={AddFavourites}
                                    favourites={favourites}
                                />
                            </div>
                        </>
                    :
                        <>
                            <div className="row d-flex align-items-center ps-3 mt-4 mb-4 me-4">
                                <MovieHeading heading={activeTab !== "Watchlist" ? "Trending" : "Watchlist"}/>
                            </div>
                            <div className="row movies flex-nowrap">
                                <MovieList 
                                    movies={handleTrendingList()} 
                                    handleFavourites={activeTab !== "Watchlist" ? handleAddFavourite : handleRemoveFavourite} 
                                    FavouriteComponent={activeTab !== "Watchlist" ? AddFavourites : RemoveFavourites}
                                    favourites={favourites}
                                />
                            </div>
                        </>
                    }
                </>             
        <Footer/>
        </div>
    );
};

export default App;
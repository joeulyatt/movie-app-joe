import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import MovieHeading from './Components/MovieHeading';
import SearchBox from './Components/SearchBox';
import AddFavourites from './Components/AddFavourites';
import RemoveFavourites from './Components/RemoveFavourites';
import Footer from './Components/Footer';

import Logo from './img/logo.png';


const tabs = ['Movies', 'TV Shows', 'Watchlist'];
const types = ['Trending', 'Comedy', 'Action'];

const App = () => {
    const [search, setSearch] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [val, setVal] = useState("");
    const [activeTab, setActiveTab] = useState(tabs[0]);


    const getSearch = async (val) => {
        const url=`https://api.themoviedb.org/3/search/${activeTab === "Movies" ? "movie" : "tv"}?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&query=${val}`
        const response = await fetch(url);
        const json = await response.json();
        setSearch(json.results ? json.results.filter(e => e.poster_path !== null) : []);
    };

    const getTrendingMovies = async () => {
        const url= `https://api.themoviedb.org/3/${activeTab === "Movies" ? "movie" : "tv"}/popular?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US`
        const response = await fetch(url);
        const json = await response.json();
        setTrendingMovies(json.results);
    };

    const getComedyMovies = async () => {
        const url = `https://api.themoviedb.org/3/discover/${activeTab === "Movies" ? "movie" : "tv"}?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=35`
        const response = await fetch(url);
        const json = await response.json();
        setComedyMovies(json.results);
    };

    const getActionMovies = async () => {
        const url = `https://api.themoviedb.org/3/discover/${activeTab === "Movies" ? "movie" : "tv"}?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${activeTab === "Movies" ? "28" : "10759"}`
        const response = await fetch(url);
        const json = await response.json();
        setActionMovies(json.results);
    };


    useEffect(() => {
        getTrendingMovies()
        getComedyMovies()
        getActionMovies()
    }, [activeTab]);

    useEffect(() => {
        getSearch(val);
    }, [val, activeTab]);

    const handleAddFavourite = (movie, idx) => {
        if (favourites.includes(movie)) return;
        const newFavouriteList = [...favourites, movie];
        if (favourites.some(e => e.poster_path.includes("default"))) {newFavouriteList.splice(0, 1)};
        setFavourites(newFavouriteList);
    };

    const handleRemoveFavourite = (movie, idx) => {
        const newFavouriteList =  [...favourites];
        newFavouriteList.splice(idx, 1);
        setFavourites(newFavouriteList);
    };

    const handleType = (type) => {
        if (type === 'Trending') {
            return trendingMovies
        } else if (type === 'Comedy') {
            return comedyMovies
        } else if (type === 'Action') {
            return actionMovies
    }};

    return (
        <div className="container-fluid movie-app">
            <div className="d-flex justify-content-between">
                <div class="mt-2 mb-2">
                    <img src={Logo} alt="" srcSet="" height="100px" className="me-5"></img>
                    {tabs.map(type => (
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
            
            <div className="row movies">
                <MovieList 
                    movies={search} 
                    handleAddFavourite={handleAddFavourite} 
                    handleRemoveFavourite={handleRemoveFavourite} 
                    FavouriteComponent={AddFavourites}
                    favourites={favourites}
                />
            </div>
            
            {activeTab !== "Watchlist" ?
                <>
                    {types.map((types) => (
                    <>
                        <MovieHeading heading={types}/>
                        <div className="row movies flex-nowrap">
                            <MovieList 
                                    movies={handleType(types)} 
                                    handleAddFavourite={handleAddFavourite} 
                                    handleRemoveFavourite={handleRemoveFavourite} 
                                    FavouriteComponent={AddFavourites}
                                    favourites={favourites}
                                />
                        </div>
                    </>
                    ))}
                </>
            :
                <>
                    <MovieHeading heading="Watchlist"/>
                    <div className="row movies">
                        <MovieList 
                            movies={favourites} 
                            handleAddFavourite={handleAddFavourite} 
                            handleRemoveFavourite={handleRemoveFavourite} 
                            FavouriteComponent={RemoveFavourites}
                            favourites={favourites}
                        />
                    </div>
                </>
            }
            <Footer/>
        </div>
    );
};

export default App;
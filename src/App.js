import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './Pages/NavBar';
import Movies from './Pages/Movies';
import TVShows from './Pages/TVShows';
import Watchlist from './Pages/Watchlist';
import Footer from './Components/Footer';

const App = () => {
    const [search, setSearch] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [val, setVal] = useState("");

    const getJson = async (genre, type, val) => {
        const url = `https://api.themoviedb.org/3/${type}/movie?api_key=50eda2eddd31465d5fbf9f1c49d7b8a6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${genre}&query=${val}`
        const response = await fetch(url);
        const json = await response.json();
        return json;
    };

    useEffect(() => {
        if (val) {
            (async () => {
                const e = await getJson(null, "search", val)
                setSearch(e.results ? e.results.filter(e => e.poster_path !== null) : []);
            })()
        }
        else {setSearch([])}
    }, [val]);

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites'));
        setFavourites(movieFavourites)
    }, []);

    const saveLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
    };

    const handleAddFavourite = (movie, idx) => {
        if (favourites.includes(movie)) return;
        const newFavouriteList = [...favourites, movie];
        if (favourites.some(e => e.poster_path.includes("default"))) {newFavouriteList.splice(0, 1)};
        setFavourites(newFavouriteList);
        saveLocalStorage(newFavouriteList);
    };

    const handleRemoveFavourite = (movie, idx) => {
        const newFavouriteList =  [...favourites];
        newFavouriteList.splice(idx, 1);
        setFavourites(newFavouriteList);
        saveLocalStorage(newFavouriteList);
    };


    return (
        <div className="container-fluid movie-app">
            <Router>    
                <NavBar/>
                    <Routes>
                        <Route path="/Movies" element={<Movies/>}/>
                        <Route path="/TVShows" element={<TVShows/>}/>
                        <Route path="/Watchlist" element={<Watchlist/>}/>
                    </Routes>
            </Router>
            <Footer/>
{/*             
            <div className="row movies">
                <MovieList 
                    movies={search} 
                    favourites={favourites}
                    handleAddFavourite={handleAddFavourite} 
                    handleRemoveFavourite={handleRemoveFavourite} 
                    FavouriteComponent={AddFavourites}
                    activeTab={activeTab}
                />
            </div>
            
            {activeTab !== "Watchlist" && !val ?
                <>
                    {(activeTab === "Movies" ? movieTypes : TVtypes).map((types) => (
                    <React.Fragment key={types}>
                        <MovieHeading heading={types}/>
                        <div className="row movies flex-nowrap">
                            <MovieList 
                                    movies={handleType(types)} 
                                    favourites={favourites}
                                    handleAddFavourite={handleAddFavourite} 
                                    handleRemoveFavourite={handleRemoveFavourite} 
                                    FavouriteComponent={AddFavourites}
                                    activeTab={activeTab}
                                />
                        </div>
                    </React.Fragment>
                    ))}
                </>
            :
                <>
                    <MovieHeading heading="Watchlist"/>
                    <div className="row movies">
                        <MovieList 
                            movies={favourites} 
                            favourites={favourites}
                            handleAddFavourite={handleAddFavourite} 
                            handleRemoveFavourite={handleRemoveFavourite} 
                            FavouriteComponent={RemoveFavourites}
                            activeTab={activeTab}
                        />
                    </div>
                </>
            }
            <Footer/> */}
        </div>
    );
};

export default App;
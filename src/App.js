import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Pages/NavBar';
import Movies from './Pages/Movies';
import TVShows from './Pages/TVShows';
import Watchlist from './Pages/Watchlist';
import Footer from './Components/Footer';

const App = () => {
    const [search, setSearch] = useState([]);
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
        </div>
    );
};

export default App;
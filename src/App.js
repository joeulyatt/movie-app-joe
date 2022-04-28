import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Pages/NavBar';
import Movies from './Pages/Movies';
import TVShows from './Pages/TVShows';
import Watchlist from './Pages/Watchlist';
import Search from './Pages/Search';
import Footer from './Components/Footer';

const App = () => {
    return (
        <>
            <div className="container-fluid movie-app">
                <Router>
                    <NavBar/>
                    <Routes>
                        <Route index element={<Movies/>}/>
                        <Route path="/Movies" element={<Movies/>}/>
                        <Route path="/TVShows" element={<TVShows/>}/>
                        <Route path="/Watchlist" element={<Watchlist/>}/>
                        <Route path="/Search" element={<Search/>}/>
                    </Routes>
                </Router>
            </div>
            <Footer/>
        </>
    );
};

export default App;
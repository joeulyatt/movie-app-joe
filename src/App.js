import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Pages/NavBar';
import Movies from './Pages/Movies';
import TVShows from './Pages/TVShows';
import Watchlist from './Pages/Watchlist';
import Search from './Pages/Search';
import Footer from './Components/Footer';

const App = () => {
    const searchVal = useSelector(state => state.search);

    useEffect(() => {
        if (searchVal.length > 0) {
            console.log("searching")
        } else {
            console.log("not seraching")
        }
    }, [searchVal])


    return (
        <div className="container-fluid movie-app">
            <Router>    
                <NavBar/>
                    <Routes>
                        <Route path="/Movies" element={<Movies/>}/>
                        <Route path="/TVShows" element={<TVShows/>}/>
                        <Route path="/Watchlist" element={<Watchlist/>}/>
                        <Route path="/Search" element={<Search/>}/>
                    </Routes>
            </Router>
            <Footer/>
        </div>
    );
};

export default App;
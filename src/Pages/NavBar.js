import React, { useState } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import SearchBox from '../Components/SearchBox'
import Logo from '../img/logo.png';

const NavBar = () => {
    const [val, setVal] = useState("");

    return ( 
        <nav>
            <img src={Logo} alt="Logo" srcSet="" height="100px"/>     
            <ul className="nav-links">
                <Link to="/Movies">
                    <li>Movies</li>
                </Link>
                <Link to="/TVShows">
                    <li>TV Shows</li>
                </Link>
                <Link to="/Watchlist">
                    <li>Watchlist</li>
                </Link>
            </ul>
            <SearchBox/>
        </nav> 
    );
};

export default NavBar;
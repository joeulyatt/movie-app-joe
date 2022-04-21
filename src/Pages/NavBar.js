import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom';
import SearchBox from '../Components/SearchBox'
import Logo from '../img/logo.png';

const NavBar = () => {

    return ( 
        <nav>
            <img src={Logo} alt="Logo" srcSet="" height="100px"/>     
            <ul className="nav-links">
                <NavLink to="/Movies">
                    <li>Movies</li>
                </NavLink>
                <NavLink to="/TVShows">
                    <li>TV Shows</li>
                </NavLink>
                <NavLink to="/Watchlist">
                    <li>Watchlist</li>
                </NavLink>
            </ul>
            <SearchBox/>
        </nav> 
    );
};

export default NavBar;
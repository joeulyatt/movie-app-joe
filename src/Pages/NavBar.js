import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom';
import SearchBox from '../Components/SearchBox';
import Logo from '../img/logo.png';

const NavBar = () => {

    return ( 
        <nav className="row">
            <div className="myLogo col-sm-12 col-md-6 col-lg-2">
                <img src={Logo} alt="Logo" srcSet="" height="100px"/>
            </div> 
            <ul className="nav-links col-sm-6 col-md-6">
                <NavLink to="/Home">
                    <li className="">Home</li>
                </NavLink>
                <NavLink to="/Movies">
                    <li className="">Movies</li>
                </NavLink>
                <NavLink to="/TVShows">
                    <li className="">TV Shows</li>
                </NavLink>
                <NavLink to="/Watchlist">
                    <li className="">Watchlist</li>
                </NavLink>
            </ul>
            <SearchBox className="col-sm-4"/>
        </nav> 
    );
};

export default NavBar;
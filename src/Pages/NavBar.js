import React, { useState } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import SearchBox from '../Components/SearchBox'
import Logo from '../img/logo.png';

const NavBar = () => {
    const [search, setSearch] = useState([]);
    const [val, setVal] = useState("");
    const [active, setActive] = useState("Movies");

    return ( 
        <nav>
            <img src={Logo} alt="Logo" srcSet="" height="100px"/>     
            <ul className="nav-links">
                <Link to="/Movies">
                    <li 
                        onClick={() =>setActive("Movies")}
                        className={active === "Movies" ? "myActiveLink" : null}
                    >   Movies
                    </li>
                </Link>
                <Link to="/TVShows">
                    <li 
                        onClick={() =>setActive("TV")}
                        className={active === "TV" ? "myActiveLink" : null}
                    >   TV Shows
                    </li>
                </Link>
                <Link to="/Watchlist">
                <li 
                        onClick={() =>setActive("Watchlist")}
                        className={active === "Watchlist" ? "myActiveLink" : null}
                    >   Watchlist
                    </li>
                </Link>
            </ul>
            <SearchBox/>
        </nav> 
    );
};

export default NavBar;
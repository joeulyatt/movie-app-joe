import React, { useState } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import SearchBox from '../Components/SearchBox'
import Logo from '../img/logo.png';

const NavBar = () => {
    const [val, setVal] = useState("");

    return ( 
        <nav className="container-fluid movie-app">
            <div className="d-flex justify-content-between">
                <div className="mt-2 mb-2">
                    <img src={Logo} alt="" srcSet="" height="100px" className="me-5"/>     
                </div>
                <SearchBox/>
            </div>    
        </nav>
    );
};

export default NavBar;
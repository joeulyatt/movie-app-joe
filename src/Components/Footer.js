import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => 
    <footer>
        <a href="https://github.com/joeulyatt/">
            <AiFillGithub/>
        </a>
        <a href="https://twitter.com/joewhocodes">
            <AiFillTwitterCircle/>
        </a>
        <a href="https://www.linkedin.com/in/joe-ulyatt-b6293198/">
            <AiFillLinkedin/>
        </a>
        <h6>&copy; 2022 JoeWhoCodes</h6>
    </footer>

export default Footer;
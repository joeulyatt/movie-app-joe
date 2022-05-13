import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => 
    <footer>
        <a href="https://github.com/joewhocodes">
            <AiFillGithub/>
        </a>
        <a href="https://twitter.com/joewhocodes">
            <AiFillTwitterCircle/>
        </a>
        <a href="https://www.linkedin.com/in/joewhocodes">
            <AiFillLinkedin/>
        </a>
        <h6>&copy; 2022 JoeWhoCodes</h6>
    </footer>

export default Footer;
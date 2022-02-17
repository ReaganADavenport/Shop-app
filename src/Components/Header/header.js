import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

import logo from '../Images/Wisteria-logo.png'

const Header = () => {
    return(
        <>
            <div className="navBar">
                <img className='logo' src={logo}></img>
                <ul>
                    <Link to='/'><b>Home</b></Link>
                    <Link to='/about'><b>About Me</b></Link>
                </ul>
            </div>
        </>
    )
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

import logo from '../../Images/Wisteria-logo.png';

const Header = () => {
    return(
        <div className='Nav'>
            <img className='logo' src={logo}></img>  
      </div>
    )
};

export default Header;
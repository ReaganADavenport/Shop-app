import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

import logo from '../../Images/Wisteria-logo.png';
import cart from '../../Images/shopping-cart.png';

const Header = () => {
    return(
        <div className='Nav'>
            <img className='logo' src={logo}></img>
            <div className='cart'>
             <span>
                <img src={cart}></img>
                </span>
                <span>0</span>
            </div>
            
      </div>
    )
};

export default Header;
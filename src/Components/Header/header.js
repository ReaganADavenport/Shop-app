import React, { useState } from 'react';
import './header.css'

import logo from '../../Images/Wisteria-logo.png';
import shopping_cart from '../../Images/shopping-cart.png';

const Header = ({size}) => {
    console.log(size);
    return(
        <div className='Nav'>
            <img className='logo' src={logo}></img>
            <div className='cart'>
             <span>
                <img src={shopping_cart}></img>
                </span>
                <span>{size}</span>
            </div>
            
      </div>
    )
    };

export default Header;
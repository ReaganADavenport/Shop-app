import React from 'react';
import './header.css'

import logo from '../../Images/Wisteria-logo.png';
import shopping_cart from '../../Images/shopping-cart.png';

const Header = ({ size }) => {
    console.log(size);
    return(
        <div className='Nav'>
            <img className='logo' src={logo}></img>
            <div className='cart'>
             <div>
                <img src={shopping_cart}></img>
                </div>
                <div className='badge'>{size}</div>
            </div>
            
      </div>
    )
    };

export default Header;
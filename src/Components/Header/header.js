import React, { Component } from 'react';
import './header.css'

import logo from '../../Images/Wisteria-logo.png';
import shopping_cart from '../../Images/shopping-cart.png';

class Header extends Component {
    render(){
        const { cart } = this.props;


    return(
        <div className='Nav'>
            <img className='logo' src={logo}></img>
            <div className='cart'>
             <span>
                <img src={shopping_cart}></img>
                </span>
                <span>{cart.length}</span>
            </div>
            
      </div>
    )
    };
}
    

export default Header;
import React,{Component} from 'react';
import './shop.css';

import Card from '../Card/card';

import Balloon from '../../Images/Balloon-flowers.png';

const Shop = () => {
    return(
        <div className='Shop'>
        <h2>This is the shop</h2>
        <Card itemImage={Balloon} itemName={'Balloon Flowers'} itemPrice={'$15.99'}></Card>
      </div>
    )
}

export default Shop;
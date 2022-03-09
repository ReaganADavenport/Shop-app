import React,{Component} from 'react';
import './shop.css';

import Card from '../Card/card';

import Balloon from '../../Images/Balloon-flowers.png';
import Pansy from '../../Images/Pansies.jpg';

const Shop = () => {
    return(
        <div className='Shop'>
        <h2>Shop</h2>
        <div className='Shelf'>
          <Card itemImage={Balloon} itemName={'Balloon Flowers'} itemPrice={'$15.99'}></Card>
          <Card itemImage={Pansy} itemName={'Pansies'} itemPrice={'$12.99'}></Card>
        </div>
        
      </div>
    )
}

export default Shop;
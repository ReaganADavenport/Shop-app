import React,{Component} from 'react';
import './shop.css';

import Card from '../Card/card';

import Balloon from '../../Images/Balloon-flowers.png';
import Pansy from '../../Images/Pansies.jpg';
import Lotus from '../../Images/Lotus.png';
import Peony from '../../Images/Peony.png';
import Snap from '../../Images/Snap-dragon.png';

const Shop = () => {
    return(
        <div className='Shop'>
        <h2>Shop</h2>
        <div className='Shelf'>
          <Card itemImage={Balloon} itemName={'Balloon Flowers'} itemPrice={'$15.99'}></Card>
          <Card itemImage={Pansy} itemName={'Pansies'} itemPrice={'$12.99'}></Card>
          <Card itemImage={Lotus} itemName={'Lotus Flowers'} itemPrice={'$25.99'}></Card>
          <Card itemImage={Peony} itemName={'Peonies'} itemPrice={'$14.99'}></Card>
          <Card itemImage={Snap} itemName={'Snap-dragons'} itemPrice={'$13.99'}></Card>
        </div>
        
      </div>
    )
}

export default Shop;
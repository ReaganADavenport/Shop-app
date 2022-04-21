import React,{Component} from 'react';
import './shop.css';

import Card from '../Card/card';
import data from '../../data';


const Shop = () => {
  console.warn(data.productData);
    return(
        <div className='Shop'>
        <h2>Shop</h2>
        <div className='Shelf'>
          {data.productData.map((item, index) => {
              return(
                <Card 
                  itemImage={item.img} 
                  itemName={item.title} 
                  itemPrice={item.price} 
                  item={item} 
                  key={index}>
                </Card>
              )
          })}
        </div>
        
      </div>
    )
}

export default Shop;
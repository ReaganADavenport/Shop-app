import React,{useState} from 'react';
import './shop.css';

import Card from '../Card/card';
import data from '../../data';


const Shop = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    console.log(item);
    alert(`Added ${item.title} to Cart`);
  }

    return(
        <div className='Shop'>
        <h2>Shop</h2>
        <div className='Shelf'>

          {data.productData.map((item, index) => {
              return(
                <Card 
                  itemImage={item.img} itemName={item.title} itemPrice={item.price} item={item} key={index} handleClick={handleClick}>
                </Card>
              )
          })}
        </div>
        
      </div>
    )
}

export default Shop;
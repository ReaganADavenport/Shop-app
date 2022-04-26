import React, { useState } from 'react'

import './App.css';

import Header from './Components/Header/header';
import Home from './Components/Home/home';
import Shop from './Components/Store-front/shop';
import Cart from './Components/Shopping-cart/cart';



function App() {
  const [cart, setCart] = useState([]);
  /*
    handleClick will take the item that got clicked, 
    add it to the cart with setCart function, 
    and then send an alert to the user letting them know it was added
  */

  const handleClick = (item) => {
    // if (cart.indexOf(item) !== -1) return;  // <- this line is for adding an item to the cart once
    setCart([...cart,item]);
    alert(`Added ${item.title} to Cart`);
  }

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   // if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  return(
    <div className="Body">
      <Header size={cart.length}></Header>
      <Home></Home> 
      <Shop handleClick={handleClick}></Shop>
      <Cart cart={cart} setCart={setCart}  ></Cart>
    </div>
)
}

export default App;

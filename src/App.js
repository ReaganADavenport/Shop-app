import React, { useState } from 'react'

import './App.css';

import Header from './Components/Header/header';
import Home from './Components/Home/home';
import Shop from './Components/Store-front/shop';
import Cart from './Components/Shopping-cart/cart';



function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart([...cart,item]);
    cart.push(item);
    console.log(cart);
    console.log(cart.length);
    alert(`Added ${item.title} to Cart`);
  }
  return(
    <div className="Body">
      <Header cart={cart} setCart={setCart}></Header>
      <Home></Home> 
      <Shop handleClick={handleClick}></Shop>
      <Cart></Cart>
    </div>
)
}

export default App;

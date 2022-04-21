import React from 'react'

import './App.css';

import Header from './Components/Header/header';
import Home from './Components/Home/home';
import Shop from './Components/Store-front/shop';
import Cart from './Components/Shopping-cart/cart';



function App() {
  return(
    <div className="Body">
      <Header></Header>
      <Home></Home> 
      <Shop></Shop>
      <Cart></Cart>
    </div>
)
}

export default App;

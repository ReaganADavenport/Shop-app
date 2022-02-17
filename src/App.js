import React from 'react'

import './App.css';

import logo from './Images/Wisteria-logo.png';
import Home from './Components/Home/home'



function App() {
  return(
    <div className="Body">
        <div className='Nav'>
          <img className='logo' src={logo}></img>  
        </div>

        <Home></Home>
        <div className='Shop'>
          <h2>This is the shop</h2>
        </div>
    </div>
)
}

export default App;

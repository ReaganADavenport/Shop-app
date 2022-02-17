import React from 'react'

import './App.css';

import Header from './Components/Header/header';
import Home from './Components/Home/home';



function App() {
  return(
    <div className="Body">
        
        <Header></Header>
        <Home></Home>
        <div className='Shop'>
          <h2>This is the shop</h2>
        </div>
    </div>
)
}

export default App;

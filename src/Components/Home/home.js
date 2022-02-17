import React,{Component} from 'react';
import './home.css';


import flower_left from '../../Images/Wisteria_left.png';
import flower_right from '../../Images/Wisteria_right.png';


const Home = () => {
    return(
        <div className="Home">
          <img className='flower-left' src={flower_left}></img>
          <div className='Text'>
            <h1>Fujiwara Florists</h1>
            <p>Only the highest quality flowers</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          
          <img className='flower-left' src={flower_right}></img>
          
        </div>
    )
}

export default Home;
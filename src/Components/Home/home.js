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
            <h4>Only the highest quality flowers</h4>
            <p>"In a world of grief and pain, flowers bloom - even then."</p>
            <p>Kobayashi Issa</p>
            <p>1763 - 1828</p>
          </div>
          
          <img className='flower-left' src={flower_right}></img>
          
        </div>
    )
}

export default Home;
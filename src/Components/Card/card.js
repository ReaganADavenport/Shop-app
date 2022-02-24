import React,{Component} from 'react';
import './card.css';

import Balloon from '../../Images/Balloon-flowers.png';

const Card = () => {
    return(
        <div className="Card">
    
            <img className='Item-image' src={Balloon}></img>
          

          <div className='Item-Name'>
            <h2>Balloon Flowers</h2>
          </div>

          <div className='Item-Price'>
            <h3>$15.99</h3>
          </div>

        </div>
    )
}

export default Card;
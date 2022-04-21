import React,{Component} from 'react';
import './card.css';



class Card extends Component {
  render(){
    const { itemImage, itemName, itemPrice, handleClick, item} = this.props;
    
    return(
        <div className="Card">
    
          <img className='Item-image' src={itemImage}></img>

          <h2>{itemName}</h2>

          <div className='Price-Cart'>
           <h3>{itemPrice}</h3>


            <button type='button' onClick={() => handleClick(item)}>Add to cart</button>
          </div>

        </div>
    )
  }
}

export default Card;
import React,{Component} from 'react';
import './card.css';



class Card extends Component {
  render(){
    const { itemImage, itemName, itemPrice } = this.props;

    function addedToCart(){
      alert(`Added ${itemName} to Cart`)
    }
    
    return(
        <div className="Card">
    
          <img className='Item-image' src={itemImage}></img>

          <h2>{itemName}</h2>

          <div className='Price-Cart'>
           <h3>{itemPrice}</h3>


            <button type='button' onClick={addedToCart}>Add to cart</button>
          </div>

        </div>
    )
  }
}

export default Card;
import React,{Component} from 'react';
import './card.css';



class Card extends Component {

  render(){
    const { itemImage, itemName, itemPrice } = this.props;
    
    return(
        <div className="Card">
    
            <img className='Item-image' src={itemImage}></img>
          

          <h2>{itemName}</h2>

          <h3>{itemPrice}</h3>

        </div>
    )
  }
}

export default Card;
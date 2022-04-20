import React,{Component} from 'react';
import './cart.css';



class Cart extends Component {
  render(){
    const { 
        isEmpty,
        items,
        removeItem 
    } = this.props;

    function addToCart(){
       //
    }
    
    if (isEmpty) return <p>Your Cart is Empty</p>;

    return(
       <div></div>
    )
  }
}

export default Card;
import React from 'react'

const Cart = (props) => {
 const {id, amount} = props;

 const openCart = () => {
  console.log("id: " + id);
  console.log("amount: " + amount);
 }
 return (
  <img 
  src='./assets/images/icon-cart.svg'
  onClick={openCart}
  ></img>
 )
}

export default Cart

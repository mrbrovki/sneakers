import React from 'react'
import Cart from './Cart'

const Header = (props) => {
  const id = props.index;
  const amount = props.amount
 return (
  <header>
    <div className='left'>
      <a href="#">
      <img src='./assets/images/logo.svg' alt='logo'></img>
      </a>
      <div className='links'>
        <a href='#'>Collections</a>
        <a href='#'>Men</a>
        <a href='#'>Women</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </div>
    </div>
    <div className='right'>
      <Cart id={id} amount={amount}/>
      <img src='./assets/images/image-avatar.png' height='50px'></img>
    </div>


  </header>
 )
}

export default Header

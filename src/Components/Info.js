import React from 'react'

const Info = (props) => {
 return (
  <div className='info'>
   <h3>SNEAKER COMPANY</h3>
   <h1>{props.name}</h1>
   <p>{props.description}</p>
   <div className='price'>
   <span className='new-price'>${props.price.new}.00</span>
   <span className='discount'>{props.price.discount}%</span>
   </div>
   <div className='old-price'>${props.price.old}.00</div>
  </div>
 )
}

export default Info

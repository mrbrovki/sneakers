import React from 'react'

const SmallImages = (props) => {
 const images = props.srcs.map((el, i) => 
 <img src={el} onClick={() => props.handleClick(i)} key={i} className='small image'></img>)
 return (
  <div className='images-container'>
   {images}
  </div>
 )
}

export default SmallImages

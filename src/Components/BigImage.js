import React from 'react'

const BigImage = (props) => {
 const src = props.src;
 const index = props.index;
 return (
  <img src={src[index]} className="big image"></img>
 )
}

export default BigImage

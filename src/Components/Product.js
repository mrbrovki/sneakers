import React , {useState}from 'react'
import BigImage from './BigImage'
import SmallImages from './SmallImages'
import Info from './Info'
import AddToCart from './AddToCart'

const Product = (props) => {
 const [index, setImage] = useState(0)
 const handleClick = newIndex => {
  setImage(newIndex)
 }
 
 return (
  <div className='flex-container'>
  <div className='flex-left'>
   <BigImage src = {props.images.big} index = {index} />
   <SmallImages 
   srcs={props.images.small} 
   handleClick={(newIndex) => handleClick(newIndex)} 
   />
  </div>
  <div className='flex-right'>
   <Info 
   description={props.description} 
   name={props.name} 
   price={props.price} 
   />
   <AddToCart {...props.images.icons} addProducts={(index, amount) => props.addProducts(index, amount)}/>
  </div>
  </div>
 )
}

export default Product

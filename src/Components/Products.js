import React from 'react'
import data from './data.json'
import Product from './Product'

const Products = (props) => {
 const product = data.map(el => 
  {
  return <Product {...el} key={el.id} addProducts={(index, amount) => props.addProducts(index, amount)}/>
 });
 return (
   <>
    {product}
   </>
 )
}

export default Products

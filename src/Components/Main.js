import React from 'react'
import Products from './Products'
const Main = (props) => {
 return (
  <main>
   <Products addProducts={(index, amount) => props.addProducts(index, amount)}/>
  </main>
 )
}

export default Main

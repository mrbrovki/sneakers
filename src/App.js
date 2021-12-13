import React, {useState} from 'react';
import Header from './Components/Header';
import Main from './Components/Main'
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const handleClick = (index, amount) => {
    setProducts(prevState => prevState.push({index: index, amount: amount}));
  }
  console.log(products[0])
  return (
    <>
      <Header product={products}/>
      <Main addProducts={(index, amount) => handleClick(index, amount)}/>
    </>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import Counter from "./counter"
import './App.css';

function App() {
  const[count,seTcount]=React.useState(0)
  const increase = () => {
    seTcount(count + 1);
// console.log(count)
   
  };
  const decrease = () => {
    seTcount(count - 1);
// console.log(count)
   
  };
  return (
    <div className="App">
      < Counter count={count} increase={increase} decrease={decrease} seTcount={seTcount}/ >
    </div>
  );
}

export default App;

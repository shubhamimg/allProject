import { useState } from 'react';
import './App.css';


const Counter = () => {
  let [count, setCount] = useState(0);
  let inCount = () =>{
    setCount(count+1);
    console.log(count);
    
  };
  return (
    <>
        <h3>
            Count = {count}
        </h3>
        <button onClick={inCount}>
            Increase Count
        </button>
    </>
  )
}

export default Counter
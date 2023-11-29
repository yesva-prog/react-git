import React, { useEffect, useState } from 'react'

function Effect() {
    const[count,setCount]=useState(0);
    // useEffect(()=>{
    //    setTimeout(()=>{
    //         setCount(prevcount=>prevcount+1)
    //    },5000)
    // },[count])

    function increment(){
        setCount(count+1);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Effect


import React, { useState } from 'react'
import Test from './Test';

function Controlled() {
    const[name,setName]=useState("");
    const[pass,setPass]=useState("");
    function change(event){
        setName(event.target.value)
    }

    function changes(event){
       setPass(event.target.value)
    }
  return (
    <div>
        <h1>{name}</h1>
        <h1>{pass}</h1>
      <form>
        <input type="text" placeholder='entername' onChange={change}/>
        <Test change={changes}/>
      </form>
    </div>
  )
}

export default Controlled

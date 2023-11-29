import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState("");
    const[pass,setPass]=useState("");
    function changes(event){
        setName(event.target.value);
    }
    function changing(event){
        setPass(event.target.value);
    }
    function click(){
        alert(`Welcome ${name}`)
    }
  return (
    <div>
      <form>
      
        <input type="text" placeholder='enter name '  onChange={changes}/>
        <input type="password" placeholder='enter pass' onChange={changing}/>
        <button onClick={click}>submit</button>
      </form>
    </div>
  )
}

export default Form

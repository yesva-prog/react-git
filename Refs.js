import React from 'react'

function Refs() {
    const inputref=React.createRef();

    function toogleClick(){
         inputref.current.focus();
    }
  return (
    <div>
      <input type='text' placeholder='enter name' ref={inputref}/>
      <button onClick={toogleClick}>click</button>
    </div>
  )
}

export default Refs

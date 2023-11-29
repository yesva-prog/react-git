import React from 'react'

const inputref=React.createRef();
function Ref() {

    function clicked(){
        inputref.current.focus();
    }
  return (
    <div>
      <input type="text" placeholder='entername' ref={inputref}/>
      <button onClick={clicked}>focus</button>
    </div>
  )
}

export default Ref

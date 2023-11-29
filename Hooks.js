import React, { useState } from 'react'

function Hooks() {
    const[mystyle,setMystyle]=useState({
        color:"black",
        backgrounColor:"white",
    });
    const[text,setText]=useState("darkmode")
    function toggleClick(){
        if(mystyle.color === "white"){
            setMystyle(
                {color:"black",backgrounColor:"white"},
                setText("light mode")
                )
        }else{
            setMystyle({color:"white",backgroundColor:"black"},setText("darkmode"))
        }
    }
  return (
    <div>
         <h1 className='texts'>{text}</h1>
      <div className='back-wrapper' style={mystyle}>
    
        <div className='head'>
            This is the title
        </div>
        <h1>Lorem ipsum dolor sit amet,
         consectetur adipisicing elit. Omnis,
         adipisci id! Natus provident voluptatem nemo deleniti possimus 
         doloribus sequi laboriosam soluta repellat cum consectetur,
          nihil accusamus nulla illum explicabo doloremque.</h1>
      </div>
      <button onClick={toggleClick}>change color</button>
    </div>
  )
}

export default Hooks



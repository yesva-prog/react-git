import React from 'react'

function Proprties(props) {
  return (
    <div>
        <div className='prop-wrapper'>
            <div className='prop-title'>
                <h1>{props.name}</h1>
            </div>
            <div className='prop-img'>
                <img src={props.img}/>
            </div>
            <div className='prop-desc'>
                <p>{props.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Proprties

import React, { useReducer } from 'react'

function Reducer() {
    const initialstate=0;

     function reducer(state,action){
        switch(action.type){
            case 'increment':
                return state+1 
            case 'decrement':
                return state-1 
            default:
                throw Error
        }
     }
       

    const[state,dispatch]=useReducer(reducer,initialstate);
  return (
    <>
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:'increment'})}>+</button>
      <button onClick={()=>dispatch({type:'decrement'})}>-</button>
    </div>
     
    <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     
    </>
  )
}

export default Reducer

import React from 'react'
import './Appp.css'
import { useDispatch, useSelector } from 'react-redux'
import { incNum,decNum } from './actions/index'
const App = () => {
  const mystate=useSelector((state)=>state.changeNum);
  const dispatch= useDispatch();
  return (
   <><div style={{border:"2px solid red"}}>
    <h1>Welcome to redux</h1>
    
        <h2  style={{textAlign:"center"}}>increment / Decrement</h2>
        <h4 style={{textAlign:"center"}}>using React and redux</h4>
        <div style={{textAlign:"center"}}>
          <button onClick={()=>dispatch(decNum())} style={{padding:".5rem"}}>-</button>
          <span style={{padding:".5rem"}}>{mystate}</span>
          <button onClick={()=>dispatch(incNum())} style={{padding:".5rem"}}>+</button>
        </div>
    </div>
   </>
  )
}

export default App


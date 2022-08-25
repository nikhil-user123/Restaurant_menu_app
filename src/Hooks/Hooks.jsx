import React, { useState } from "react"
import "./h.css"



const Hook = () => {
  const [count, setState] = useState(0)
  const IncNum =()=>{
    setState(count+1)
  // alert('button click')
  }

  return (
    <div className="div">
    <h1>{count}</h1>
    <button onClick={IncNum} className="button"> Click Here  </button>
    </div>
    )
}
export default Hook

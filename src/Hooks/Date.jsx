import React,{useState} from 'react'
import "./h.css"
const Time =()=>{
  let time = new Date().toLocaleTimeString();
  const [cTime, setCtime] = useState(time)
  const UpdateTime =()=>{
    time = new Date().toLocaleTimeString()
    setCtime(time)
  
  }
  setInterval(UpdateTime,1000);
  return(
    <div className="div">
    <h1> {cTime} </h1>
    
    </div>
    )
}

export default Time;
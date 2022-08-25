import React from 'react'
import "./Task.css"
import image from '../Tasks/user.jpg'

const Card =()=>{
  return(
      
     <div className="container">
        
          <img src={image} className="image" alt="userimage"/>
          <div className="row1">
          <p>Nikhil Prajapat</p>
          </div>
          <div className="row2">
          <p>What if you love knowledge for its own sake, not necessarily as a blueprint to action? What if you wish there were more, not fewer reflective types in the world.</p>
          </div>
          <div className="row3">
          <p> - Developer at Dourido</p>
          </div>
    </div>
    )
}
export default Card
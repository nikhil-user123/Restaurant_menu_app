import React from 'react'
import {NavLink} from 'react-router-dom'
import "./index.css"
const Menu = () =>{
  return (
    <>
      <NavLink  activeClassName="active_class" to="/"> Aboutus </NavLink>
      <NavLink activeClassName="active_class" to="/contact"> Contactus </NavLink>
      
    </>
    );
}
export default Menu
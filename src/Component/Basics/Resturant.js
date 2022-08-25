import React, {useState} from "react"
import "./style.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"
const Resturant= () => {
  const [menuData, setMenuData] = useState(Menu)
  return(
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item">Breakfast</button>
        </div>
      </nav>
      <MenuCard menuData={menuData}/>
    </>
    )
}
export default Resturant
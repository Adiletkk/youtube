import React, { useState } from "react";
import css from "./Navbar.module.css";
import Menu from "../Menu/Menu";

function Navbar({items,id}) {
const [menuActive,setMenuActive] = useState(false )
  return (
  <div>
    <nav>
        <div className={css.burger_btn} onClick={() => setMenuActive(!menuActive)} >
            <span />
        </div>
      
    </nav>
        <Menu active={menuActive} setActive={setMenuActive} header={'Бургер меню'} items={items } />
  </div>
  )
}

export default Navbar;

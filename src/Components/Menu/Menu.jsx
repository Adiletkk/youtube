import React from "react";
import css from './Menu.module.css'
import { Link } from "react-router-dom";
import Mapicon from "../../Constants/MapIcon/Mapicon";



const Menu = ({id,active,setActive}) => {
  return (
    <div className={active ? css.wrapperactive : css.wrapper}  onClick={() => setActive(false)}>
      <div className={css.blur} />
      <div className={css.menu_content}>
        <div className={css.menu_navbar}>
        <ul>
            {Mapicon.map((item) => (
              <li className={css.decor}>
                <div className={css.none}>
                <Link href={item.href} key={id}>  <p className={css.text}> {item.value} </p></Link>
                <span className="material-symbols-outlined">{item.ikon}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;

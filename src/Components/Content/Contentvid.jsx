import React from "react";
import css from "./Content.module.css";


function Contentvid({image,avatar,title,name}) {


  console.log(avatar)
  return (
    <div className={css.wrapper}>
      <div className={css.center}>
        <div className={css.card}>
          <div className={css.top}>
        <div className={css.image}>
          <img src={image} alt="" />
        </div>
        </div>
        <div className={css.bottom}>
        <div className={css.flex}>
        <div className={css.avatar}>
          <img src={avatar} alt="" />
        </div>
        <div className={css.name}>
          <h4>{name}</h4>
        </div>
        </div>
        <div className={css.title}>
          <p >{title}</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contentvid;

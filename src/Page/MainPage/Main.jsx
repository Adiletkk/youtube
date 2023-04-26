import React from "react";
import css from "./Main.module.css";
import Header from "../../Components/headercomponent/Header";


function Main({image,avatar,title}) {
  console.log(title,avatar,image)
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <Header />
      </div>
      <div>
        <div className={css.left}>
            <div className={css.video}>
              <img src={image} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;



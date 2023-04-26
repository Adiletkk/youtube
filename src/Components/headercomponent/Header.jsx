import React from 'react'
import css from './Header.module.css'
import logomain from '../../Assets/logomain.png'
import seacrh from '../../Assets/zoom.png'
import user from '../../Assets/user.png'
import video from '../../Assets/video.png'
import bull from '../../Assets/bell.png'
import Navbar from '../navbar/Navbar'



function Header() {
  return (
    <div className={css.wrapper}>
        <div className={css.header_top}>
        <div className={css.left}>
          <Navbar/>
            <img src={logomain} alt="logomain" />
        </div>
        <div className={css.center}>
            <input type="text" placeholder='Введите запрос' />
            <img src={seacrh} alt="search" />
        </div>
        <div className={css.right}>
            <img src={video} alt="video" />
            <img src={bull} alt="bull" />
            <img src={user} alt="user" />
        </div>
        </div>
    </div>
  )
}

export default Header
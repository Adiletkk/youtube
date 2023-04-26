import React from 'react'
import css from './MoreVid.module.css'
import Contentvid from '../Content/Contentvid'
import Mapvideo from '../../Constants/MapVideo/Mapvideo'


function MoreVid() {
  return (
   <div className={css.wrapper}>
      {Mapvideo.map( (el) => {
        return <Contentvid {...el} key={el.id}/>
      })}
   </div>
  )
}

export default MoreVid
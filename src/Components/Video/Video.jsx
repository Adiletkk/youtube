import React from 'react'
import Mapvideo from '../../Constants/MapVideo/Mapvideo'
import Main from '../../Page/MainPage/Main'

function Video() {
  return (
        <div className={css.wrapper}>
      {Mapvideo.map( (el) => {
        return <Main {...el} key={el.id}/>
      })}
   </div>
  )
}

export default Video
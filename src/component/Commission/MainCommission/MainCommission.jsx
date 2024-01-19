import React from 'react'
import './MainCommission.css'
import ImageBackGroundCommission from "../../../assets/image/commission bg.png"
import TextMainCommission from './TextMainCommission/TextMainCommission'

function MainCommission() {
  return (
    <div className='MainCommission'>
        <img src={ImageBackGroundCommission} alt='imagebackgroundcommission'></img>
        <TextMainCommission/>
    </div>
  )
}

export default MainCommission
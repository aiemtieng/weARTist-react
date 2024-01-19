import React from 'react'
import './BackgroundHomePage.css'
import BackgroundHome from '../../../assets/image/bgmainpage.png'

function BackgroundHomePage() {
  return (
    <div className='BackgroundHomePage'>
        <img src={BackgroundHome} alt='BGHome'></img>
        <h3 className='TextNameHomePage'>weARTist</h3>
    </div>
  )
}

export default BackgroundHomePage
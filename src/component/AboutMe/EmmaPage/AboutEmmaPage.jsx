import React from 'react'
import './AboutEmmaPage.css'
import NavBar from "../../Home/NavBar/NavBar"
import EmmaProfile from './EmmaProfile/EmmaProfile'
import EmmaExamImage from './EmmaExamImage/EmmaExamImage'

function AboutEmmaPage() {
  return (
    <div className='AboutEmmaPage'>
        <NavBar/>
        <EmmaProfile/>
        <EmmaExamImage/>
    </div>
  )
}

export default AboutEmmaPage
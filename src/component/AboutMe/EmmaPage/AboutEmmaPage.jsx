import React from 'react'
import './AboutEmmaPage.css'
import NavBar from "../../Home/NavBar/NavBar"
import EmmaProfile from './EmmaProfile/EmmaProfile'
import EmmaExamImage from './EmmaExamImage/EmmaExamImage'
import ArrowBackToComissionPage from '../ArrowBackToComissionPage/ArrowBackToComissionPage'

function AboutEmmaPage() {
  return (
    <div className='AboutEmmaPage'>
        <NavBar/>
        <ArrowBackToComissionPage/>
        <EmmaProfile/>
        <EmmaExamImage/>
    </div>
  )
}

export default AboutEmmaPage
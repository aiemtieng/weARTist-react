import React from 'react'
import './ArrowBackToComissionPage.css'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function ArrowBackToComissionPage() {
  return (
    <div className='ArrowBackToComissionPage'>
        <Link to="/commissionpage"><FaArrowLeft /></Link>
    </div>
  )
}

export default ArrowBackToComissionPage
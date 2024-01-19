import React from 'react'
import './RecommendArtist.css'
import longtabframe from "../../../assets/image/longtabcommissionpage.png"

function RecommendArtist() {
  return (
    <div className='RecommendArtist'>
        <img src={longtabframe} alt='longtabframe'></img>
        <h1 className='TextArtist'>ARTIST</h1>
        <svg className="LineUnderTextArtist" width="1600" height="10">
          <line
            x1="0"
            y1="5"
            x2="1600"
            y2="5"
            style={{ stroke: "white", strokeWidth: "3" }}
          />
        </svg>
    </div>
  )
}

export default RecommendArtist
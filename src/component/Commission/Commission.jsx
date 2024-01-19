import React from 'react'
import './Commission.css'
import NavBar from '../Home/NavBar/NavBar'
import MainCommission from './MainCommission/MainCommission'
import RecommendArtist from './RecommendArtist/RecommendArtist'
import SearchandCardNameArtist from './RecommendArtist/SearchandCardNameArtist/SearchandCardNameArtist'
import CommissionFooter from './Footer/CommissionFooter'
import BackgroundPurpleFlower from "../../assets/image/bgpurpleflower.png"
import BackgroundSunFlower from "../../assets/image/bgsunflower.png"
import BackgroundWaterColor from "../../assets/image/bgwatercolor.png"

function Commission() {
  return (
    <div className='Commission'>
        <img className='Backgroundwatercolor1' src={BackgroundWaterColor} alt='bgwatercolor'></img>
        <img className='Backgroundwatercolor2' src={BackgroundWaterColor} alt='bgwatercolor'></img>
        <img className='Backgroundwatercolor3' src={BackgroundWaterColor} alt='bgwatercolor'></img>
        <img className='Backgroundwatercolor4' src={BackgroundWaterColor} alt='bgwatercolor'></img>
        <img className='Backgroundsunflower1' src={BackgroundSunFlower} alt='bgsunflower'></img>
        <img className='Backgroundsunflower2' src={BackgroundSunFlower} alt='bgsunflower'></img>
        <img className='Backgroundsunflower3' src={BackgroundSunFlower} alt='bgsunflower'></img>
        <img className='Backgroundpurpleflower1' src={BackgroundPurpleFlower} alt='bgpurpleflower'></img>
        <img className='Backgroundpurpleflower2' src={BackgroundPurpleFlower} alt='bgpurpleflower'></img>
        <img className='Backgroundpurpleflower3' src={BackgroundPurpleFlower} alt='bgpurpleflower'></img>
        <NavBar/>
        <MainCommission/>
        <RecommendArtist/>
        <SearchandCardNameArtist/>
        <CommissionFooter/>
    </div>
  )
}

export default Commission
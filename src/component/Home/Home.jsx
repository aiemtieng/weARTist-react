import React from 'react';
import './Home.css';
import NavBar from './NavBar/NavBar';
import BackgroundHomePage from './BackgroundHomePage/BackgroundHomePage';
import AboutUs from './AboutUs/AboutUs';
import NewArtWork from './NewArtWork/NewArtWork';
import Footer from './Footer/Footer';
import ParallaxBackGround from './ParallaxBackGround/ParallaxBackGround';

function Home() {
  return (
    <div className='Home'>
      <NavBar/>
      <BackgroundHomePage/>
      <AboutUs/>
      <NewArtWork/>
      <ParallaxBackGround/>
      <Footer/>
    </div>
  );
}

export default Home;

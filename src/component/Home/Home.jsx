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
    <div
      className='TestJSX'
      style={{
        display:'flex',
        alignItems:'center',
        gap:'12px',
        background:'dodgerblue',
        padding:'12px'
      }}
    >
      <button>=</button>
      <code style={{color:'#FFF'}}>Title</code>
      <button style={{marginLeft:'auto'}}>Button</button>
    </div>
  );
}

export default Home;

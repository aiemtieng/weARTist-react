import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import IconBag from '../../../assets/image/bag icon.png'
function NavBar() {
  return (
    <div className='NavBar'>
        <nav className='NavBarTab'>
            <Link to="/" className='Logo'>weARTist</Link>
            <Link to="/commissionpage" className='NavTextCommission'>Commission</Link>
            <Link className='NavTextShop'>Shop</Link>
            <Link className='NavIconShoppingBag'><img src={IconBag} alt='IconBag'></img></Link>
            <Link to="/loginpage" className='NavTextLogin'>Login</Link>
        </nav>
    </div>
  )
}

export default NavBar
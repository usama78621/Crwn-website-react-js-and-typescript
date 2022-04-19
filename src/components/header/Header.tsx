import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header'>
        <Link  to='/'>
            <img src='./logo.png' alt="logo" className='logo-container' />
        </Link>
        <div className='options'>
           <Link className='option' to='/shop'>
            SHOP
           </Link>
           <Link className='option' to='/contact'>
             Contact
           </Link>
           
        </div>
    </div>
  )
}

export default Header
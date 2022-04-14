import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul className='nav-ul'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
        <li><Link to='/logout'>Logout</Link></li>
    </ul>
  )
}

export default Header
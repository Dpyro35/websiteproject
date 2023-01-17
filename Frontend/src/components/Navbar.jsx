import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h3 className='text-align-center p-10'><a href="/"><img src="../logo.png" alt="" /></a> </h3>
      <ul className='list'>
        <li className='li'><div><a href="/home/null">Home</a> </div></li>
        <li className='li'><div><a href="/announcements">Announcements</a></div></li>
        <li className='li'><div><a href="/contact">Contact Us</a></div></li>
        <li className='li'><div><a href="/account">Account</a></div></li>
      </ul>
    </div>
  )
}

export default Navbar
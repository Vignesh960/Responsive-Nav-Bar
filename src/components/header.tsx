import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const[isMobile,setIsMobile]=useState(true);
  return (
   <header className='brand_header'>
    <nav className={isMobile?'brand_header_links_mobile':"brand_header_links"} onClick={(e)=>setIsMobile(false)}>
      <NavLink className="brand_header_links_items" to="/">Home</NavLink>
      <NavLink className="brand_header_links_items" to="/about">About</NavLink>
      <NavLink className="brand_header_links_items" to="">Contact</NavLink>
      <NavLink className="brand_header_links_items" to="">Signup</NavLink>

    </nav>
    <button className='mobile-menu'>{isMobile?<i className="fa fa-times" aria-hidden="true" ></i>:<i className="fa fa-bars" aria-hidden="true"></i>}</button>

   </header>
    
  )
}

export default Header
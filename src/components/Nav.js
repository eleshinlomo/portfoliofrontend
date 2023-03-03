import React from 'react'
import { useState, useEffect} from 'react'
import '../styles/Nav.css'
import{Link, Routes, Route} from 'react-router-dom'

const Nav = () => {
  const [menu, setMenu] = useState([])

  useEffect(()=>{

  const menuSetter = false
  setMenu(menuSetter)

  }, [])
  

  return (
<nav className='nav' id="nav">
<div className='logo'><a href='/'>
  <img src ="/logo_transparent.png" alt="logo" />
</a></div>
    
{/* <ul>
<li><button className='nav-btn' onClick={()=>setMenu(true)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg></button>
{menu? */}

<div class="nav-list">
  <Link className='nav-item' to="/">Home</Link>
  <Link className='nav-item' to="/news">News</Link>
  <Link className='nav-item' to="/contact">Contact</Link>
  </div>


    </nav>
  )
}

export default Nav
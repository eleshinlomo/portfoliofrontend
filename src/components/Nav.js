import React from 'react'
import { useState, useEffect} from 'react'
import '../styles/Nav.css'

const Nav = () => {
  const [menu, setMenu] = useState([])

  useEffect(()=>{

  const menuSetter = false
  setMenu(menuSetter)

  }, [])
  

  return (
<nav className='nav'>
    
{/* <ul>
<li><button className='nav-btn' onClick={()=>setMenu(true)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg></button>
{menu? */}
<ul class="nav-list">
  <li ><a href='/'>Home</a></li>
  <li><a href='/#'>Services</a></li>
  <li><a href='/#'>Contact</a></li>
  </ul>

    </nav>
  )
}

export default Nav
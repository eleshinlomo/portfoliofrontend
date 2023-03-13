import React from 'react'
import { useState, useEffect} from 'react'
import '../styles/Nav.css'
import{Link} from 'react-router-dom'

const Nav = () => {
  const [menu, setMenu] = useState(false)

  
  

return (
<nav className='nav' id="nav">




<ul>
<li className='logo'><Link to='/'>
  <img src ="/logo_transparent.png" alt="logo" />
  </Link></li>
  <ul class="nav-list">
  <li className='nav-item'><Link to="/">Home</Link></li>
  <li className='nav-item'><Link  to="/contact">Contact</Link></li>
  <li className='nav-item'><Link  to="/projects">Projects</Link></li>
  </ul>
  </ul>

{/* Mobile */}

<ul className='nav-list-mobile'>
<button className='nav-mobile-menu-btn' onClick={()=>setMenu(true)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg></button>
{menu? 



  <ul>

  <ul className="nav-list-mobile-items">
  <button className='nav-mobile-close-btn' onClick={()=>setMenu(false)}>X</button>
  <li className='nav-list-mobile-item'><Link to="/">Home</Link></li>
  <li className='nav-list-mobile-item'><Link  to="/contact">Contact</Link></li>
  <li className='nav-list-mobile-item'><Link  to="/projects">Projects</Link></li>
  
  </ul>
  
  </ul>:null
}
</ul>
    </nav>
  )
}

export default Nav
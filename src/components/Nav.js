import React from 'react'
import '../App.css';
import { useState, useEffect} from 'react'

const Nav = () => {
  const [menu, setMenu] = useState([])

  useEffect(()=>{

  const menuSetter = false
  setMenu(menuSetter)

  }, [])
  

  return (
<nav className='nav'>
    
<ul>
<li><button onClick={()=>setMenu(true)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg></button>
{menu?
<ul class="nav-list">
  <li class="nav-list-item"><a href='/' className='nav-a'>Home</a></li>
  <li class="nav-list-item"><a href='/#' className='nav-a'>Services</a></li>
  <li class="nav-list-item"><a href='/#' className='nav-a'>Contact</a></li>
  <li><button onClick={()=>setMenu(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(149,164,166,1)"/></svg></button></li>
  
  </ul>
:null
}
</li>
    </ul>
    </nav>
  )
}

export default Nav
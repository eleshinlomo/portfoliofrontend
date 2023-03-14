import React from 'react'
import '../styles/Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
    
    <p>Copyright 2023. Building only the best.<Link to="/privacy"> Privacy Policy</Link></p>
    </div>
    
  )
}

export default Footer
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'



const Saas = () => {
    

   const [saasModal, setSaasModal] = useState(false)

   const [data, setData] = useState([])
   const handleChange = (e)=>{
    setData(e.target.value)
   }

   const submit =(e)=>{
    e.preventDefault()
    fetch('http://localhost:3300/addSaasUsers', {
        method: "POST",
        mode: "cors",
        body: {email: data}
    })

    .then((res)=>{
        console.log(res)
        
    })
}



  return (
    <div className='saas-main'>
    <div className='saas-card'>
        <h2>ARE YOU A RECRUITER OR DO YOU WORK AS A TALENT AQUISITION PROFESSIONAL?</h2>
        <p>NEW SaaS LAUNCHING SOON. SOLUTION IS PACKED WITH ALL FEATURES TO MAKE YOUR TALENT FINDING PROCESS 100 TIMES EASIER.</p>
        <button onClick={()=>setSaasModal(true)}>DONT TAKE OUR WORD FOR IT!</button>
        
        {saasModal?
            <div className='saas-modal'>
        <div className='saas-overlay'></div>
        <ul className='saas-text'>
            <li>Saas Features include</li>
            <li>World class CMS to keep up with clients</li>
            <li>World class CMS to keep up with candidates</li>
            <li>Manage Placements with ease</li>
            <li>Review all unfilled job orders</li>
            <li>Manage Recruiters' performance within your team</li>
            <li>Ideal Software for every Staffing firm</li>
            <li>And much more...</li>
            <p>Sign up below for a lifetime membership...COMING SOON!</p>
        </ul>
        <button className='saas-close-btn' onClick={()=>setSaasModal(false)}>Close</button>
        </div>:null
        }
        

    </div>
         
    </div>

  )
}

export default Saas
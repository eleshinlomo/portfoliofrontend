import React from 'react'
import { useState, useEffect } from 'react';



const Chicagoheader = () => {
    const [lead, setLead] = useState([])

    useEffect(()=>{

        fetch('', {
            method: "POST",
            
        })
        
    }, [])
  return (
    <div className='saas-main'>
    <div className='saas-card'>
        <h2>ARE YOU A RECRUITER OR DO YOU WORK AS A TALENT AQUISITION PROFESSIONAL?</h2>
        <p>NEW SaaS WILL BE LAUNCHED WITH ALL FEATURES TO MAKE YOUR TALENT FINDING PROCESS 100 TIMES EASIER</p>
        <ul>
            <li>Saas Features include</li>
            <li>World class CMS to keep up with clients</li>
            <li>World class CMS to keep up with candidates</li>
            <li>Manage Placements with ease</li>
            <li>Review all unfilled job orders</li>
            <li>Manage Recruiters' performance within your team</li>
            <li>Ideal Software for every Staffing firm</li>
            <li>And much more...</li>
            <p>Sign up below for a lifetime membership.</p>
            <form action="/addSaasUsers" method='POST'>
                <input type="email" name="email" placeholder='enter email' />
                <button>Submit</button>
            </form>

        </ul>
    </div>
        
    </div>

  )
}

export default Chicagoheader
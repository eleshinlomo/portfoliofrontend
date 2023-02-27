import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import '../styles/Saas.css'



const Saas = () => {
    

   const [saasModal, setSaasModal] = useState(false)
   const [email, setEmail] = useState([])
   const [message, setMessage] = useState()

   const emailSubmit =(e)=>{
    e.preventDefault()
    fetch('/api/addSaasUsers/',{
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: email})
    })
    .then((result)=>{
        if(!result){
            return setMessage("There seem to be error with your request. Please check and resend")
            
        }
        return setMessage(`Thank you for showing interest. We have received your email "${email}" and will be reaching out with details once the software launches.`)
        
    })
   }





  return (
    <div className='saas-main'>
    <div className='saas-card'>
       <div className='saas-card-text'>
        <h3>ARE YOU A RECRUITER OR DO YOU WORK AS A TALENT AQUISITION PROFESSIONAL?</h3>
        <p>NEW SaaS LAUNCHING SOON. SOLUTION IS PACKED WITH ALL FEATURES TO MAKE YOUR TALENT FINDING PROCESS 100 TIMES EASIER.</p>
        <button onClick={()=>setSaasModal(true)}>TELL ME MORE</button>
        </div>
        <div className='saas-form'>
        <form onSubmit={emailSubmit}>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" value={email} placeholder="Enter email for lifetime membership" required />
            <button type='submit'>Submit</button>
        </form>
        </div>
        <div className='saas-message'>
        {message}
        </div>
    </div>
        
        
        {saasModal?
            <div className='saas-modal'>
        <div className='saas-overlay'></div>
        <ul className='saas-modal-text'>
            <li>Saas Features include:</li>
            <li>World class CMS to keep up with clients</li>
            <li>World class CMS to keep up with candidates</li>
            <li>Manage Placements with ease</li>
            <li>Review all unfilled job orders</li>
            <li>Manage Recruiters' performance within your team</li>
            <li>Ideal Software for every Staffing firm</li>
            <li>And much more...</li>
            <button className='saas-close-btn' onClick={()=>setSaasModal(false)}><a href="#email">Sign up for a lifetime membership</a></button>
            
        </ul>
        
        
        </div>:null
        }
        

    </div>
         
    

  )
}

export default Saas
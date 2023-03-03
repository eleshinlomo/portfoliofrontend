import React from 'react'
import {useState, useEffect} from 'react'
import '../styles/Feedback.css'
import '../styles/App.css'

const Feedback = () => {
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const [msg, setMsg] = useState("")

   

    const submitHandler = (e)=>{
        e.preventDefault()
        fetch('https://portbackend.herokuapp.com/api/addFeedback', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                description: description
            })

        })
        .then((result)=>{
            if(!result){
                setMsg("No data to display")
            }else{
                console.log(result)
                setMsg(`We have received your request and will get back within 24hrs. Thank you for choosing us.`)
                return result
            }
            
        })

    }
    
  return (
    <div className='feedback-main'>
    <div className='image-holder'>
        <img src="https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='feedback-image' alt="random"/>
    </div>
    <div className='form-content' id="contact">
    <div className='feedback-msg'>
            {msg}
        </div>
    <h3>Tell us about your project and we'll be in touch ASAP.</h3>
        <form onSubmit={submitHandler}>
         <label for="email">Email</label>
            <input placeholder="Enter email here" id="f-email" type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label for="description">Project Description</label>
            <textarea placeholder="Describe your project" id="f-email" type="email"  value={description} onChange={(e)=>setDescription(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        
        </div>

        <div className='image-holder'>
        <img src="https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='feedback-image' alt="random"/>
    </div>
    </div>
  )
}

export default Feedback
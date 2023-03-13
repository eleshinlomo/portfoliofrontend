import React from 'react'
import {useState, useEffect} from 'react'
import '../styles/Contact.css'


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
    
  )
}

export default Feedback
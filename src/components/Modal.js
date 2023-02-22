import React from 'react'
import {useEffect, useState} from 'react'

const Modal = () => {
    const [modal, setModal] = useState(false)
     const toggleModal = ()=>{
        return "a"
     }
    return ( 
    <div>
        <button onClick={()=>setModal(true)}
            className = "btn-modal">
            
            Open
        </button>
    {modal?
        <div className='modal'>
        <div className='overlay'></div>
        
        <div className='modal-content'>
         <h2>Hello Modal</h2>
         <p>This is modal screaming so loud</p>
        </div>
        <button className='close-btn' onClick={()=>setModal(false)}>
            Close
        </button>
        </div>:null
    }
    </div>
  )
}

export default Modal
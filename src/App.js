import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Feedback from './components/Contact'
import Contact from './components/Contact'
import Projects from './components/Projects'






function App() {

    


return(
    


<div className='container' id="nav">
<Nav />
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/contact" element={<Contact />}/>
<Route path="/contact" element={<Feedback />}/>
<Route path="/projects" element={<Projects />}/>
</Routes>  
<Footer /> 
</div>                                                                                                                                                                                 
  


    
)

  
}

export default App

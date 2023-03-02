import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Feedback from './components/Feedback'
import Allnews from './components/News'






function App() {

    


return(
    


<div className='container' id="nav">
<Nav />
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/news" element={<Allnews />}/>
<Route path="/contact" element={<Feedback />}/>
</Routes>  
<Footer /> 
</div>                                                                                                                                                                                 
  


    
)

  
}

export default App

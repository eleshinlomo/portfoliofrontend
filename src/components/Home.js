import React from 'react'
import '../styles/App.css'
import Nav from './Nav'
import News from './News'
import Footer from './Footer'
import Saas from './Saas'
import Header from './Header'
import Modal from './Modal'
import Newstwo from './Newstwo'
import Newsthree from './Newsthree'
import Feedback from './Feedback'
import {Route, Routes} from 'react-router-dom'
import Newsaas from './Projects'

const Home = () => {
  return (

   <>

    
    <Header />
    <News />
    <Feedback />
    <Newstwo />
    <Saas />
    <Newsthree />
    </>
  )
}

export default Home
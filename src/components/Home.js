import React from 'react'
import '../styles/App.css'
import Nav from './Nav'
import News from './News'
import Footer from './Footer'
import Header from './Header'
import Modal from './Modal'
import Newstwo from './Newstwo'
import Newsthree from './Newsthree'
import {Route, Routes} from 'react-router-dom'


const Home = () => {
  return (

   <>

    
    <Header />
    <News />
    <Newstwo />
    <Newsthree />
    </>
  )
}

export default Home
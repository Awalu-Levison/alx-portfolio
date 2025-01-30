/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Explore from '../../components/Explore/Explore'
import AboutUs from '../../components/AboutUs/AboutUs'
import Footer from '../../components/Footer/Footer'


const Home = () => {

  return (
    <div>
      <Header />
      <Explore />
      <AboutUs />
      <Footer />
  </div>
    
  )
}

export default Home

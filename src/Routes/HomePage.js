import React from 'react'
import Products from '../components/Products'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <>
     <Navbar/>
     <Home/> 
     <About/>
     <Products/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default HomePage

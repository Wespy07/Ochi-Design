import React from 'react'
import Navbar from '../components/header/Navbar'
import './Pages.css'
import Footer from '../components/footer/Footer'

function AboutUs() {
  return (
    <>
        < Navbar />
        <div className='h-screen w-full flex flex-col justify-center items-center about-us'>
            <h1>wespy07</h1>
            <p>The closer you look, the lesser you see.</p>
        </div>
        < Footer />
    </>
  )
}

export default AboutUs
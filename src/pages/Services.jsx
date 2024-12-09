import React from 'react'
import Navbar from '../components/header/Navbar'
import './Pages.css'
import Footer from '../components/footer/Footer'

function Services() {
    return (
        <>
            < Navbar />
            <div className='text-[70px] h-screen w-full flex justify-center items-center services'>
                <img className='rounded-3xl' src="./wip.png" />
            </div>
            < Footer />
        </>
    )
}

export default Services
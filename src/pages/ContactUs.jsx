import React from 'react'
import Navbar from '../components/header/Navbar'
import './Pages.css'
import Footer from '../components/footer/Footer'

function ContactUs() {
    return (
        <>
            < Navbar />
            <div className='h-screen w-full flex justify-center items-center gap-3 contact-us'>
                <a href='https://github.com/Wespy07' target='_blank' className='rounded-lg'>
                    <img src="./socials/gh.png" />
                </a>
                <a href='https://www.linkedin.com/in/wespy07/' target='_blank' className='rounded-lg'>
                    <img src="./socials/ln.png" />
                </a>
                <a href='https://wespyportfolio.netlify.app/' target='_blank' className='rounded-lg'>
                    <img src="./socials/wb.png" />
                </a>
            </div>
            < Footer />
        </>
    )
}

export default ContactUs
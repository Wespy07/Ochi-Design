import React from 'react'
import './Herosection.css'
import { easeInOut, motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Herosection() {

    useGSAP(() => {
        gsap.from('.we-create', {
            y: -70,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: easeInOut
        })
        gsap.from('.jaw-drop', {
            y: -70,
            delay: 1.3,
            duration: 0.8,
            opacity: 0
        })
        gsap.from('.hero-site', {
            y: -70,
            delay: 1.9,
            duration: 0.8,
            opacity: 0
        })
        gsap.from('.hero-span', {
            delay: 2.3,
            duration: 1,
            opacity: 0,
            rotate: 900,
            scale: 0,
            x: 100
        })
    })

    return (
        <main data-scroll data-scroll-speed='-0.5' className='w-full'>
            <div className='hero-section pt-[80px] pl-[48px] font-semibold leading-none uppercase'>
                <div className='max-lg:text-[130px] hero-text'>
                    <h1 className='mb-[-16px] we-create'>We create</h1>
                    <div className='flex'>
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: '148px' }}
                            transition={{ ease: 'linear', duration: 0.35 }}
                            className='hero-span object-contain overflow-hidden'>
                            <img src="./jaw.gif" />
                        </motion.span>
                        <h1 className='mb-[-16px] jaw-drop'>Jaw dropping</h1>
                    </div>
                    <h1 className='mb-[-16px] hero-site'>Websites</h1>
                </div>
            </div>

            <hr className='max-sm:mt-[50px] mt-[80px]' />

            <div className='flex w-full justify-between px-[80px] mt-5 hero-bottom'>
                <p>For public and private companies</p>
                <p>From Startups to industry giants</p>
                <div className='flex gap-1 hero-buttons'>
                    <button className='hero-btn'>
                        <p>Start a project</p>
                    </button>
                    <button className='hero-btn-i'>
                        <i className="rotate-45 fa-solid fa-arrow-up-long"></i>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Herosection
import React from 'react'
import './Herosection.css'

function Herosection() {
    return (
        <main className='w-full'>
            <div className='hero-section pt-[80px] pl-[48px] font-semibold leading-none uppercase'>
                <div className=''>
                    <h1 className='mb-[-16px]'>We create</h1>
                    <h1 className='mb-[-16px]'>Jaw dropping</h1>
                    <h1 className='mb-[-16px]'>Websites</h1>
                </div>
            </div>

            <hr className='mt-[96px]' />

            <div className='flex w-full justify-between px-[80px] mt-5'>
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
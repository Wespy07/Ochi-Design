import React from 'react'
import './Herosection.css'

function Herosection() {
    return (
        <main className='w-full'>
            <div className='hero-section pt-[5rem] pl-[3rem] font-semibold leading-none uppercase'>
                <div className='font-grotesk3'>
                    <h1 className='mb-[-1rem]'>We create</h1>
                    <h1 className='mb-[-1rem]'>Jaw dropping</h1>
                    <h1 className='mb-[-1rem]'>Websites</h1>
                </div>
            </div>

            <hr className='mt-[6rem]' />

            <div className='flex w-full justify-between px-[5rem] mt-5'>
                <p>For public and private companies</p>
                <p>From the first pitch to IPO</p>
                <div className='flex gap-1 hero-buttons'>
                    <button className='hero-btn'>
                        <p>Start the project</p>
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
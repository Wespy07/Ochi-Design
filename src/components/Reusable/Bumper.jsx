import React from 'react'
import './Button.css'

function Bumper() {
    return (
        <div className='bumper-container bg-[#cdea68] px-12 py-16 w-full h-[600px] flex gap-5 justify-center items-center rounded-[25px]'>
            <div className='bg-[#004d43] w-1/2 h-[90%] rounded-xl flex items-center justify-center relative'>
                <img className='bumper-image' src='./bumper/1.png' />
                <div className='copyright-btn absolute bottom-5 left-5 text-[#cdea68] border-[#cdea68] border-[1px] px-3 rounded-3xl py-1'>
                    <button>&copy; 2022-2024</button>
                </div>
            </div>
            <div className='w-1/2 h-[90%] flex gap-5 bumper-box-two'>
                <div className='w-1/2 bg-[#212121] rounded-xl flex items-center justify-center relative bumper-btwos'>
                    <img className='bumper-image' src='./bumper/2.png' />
                    <div className='absolute bumper-btn bottom-5 left-5 border-[1px] px-3 rounded-3xl py-1'>
                        <button className='uppercase'>Rating 5.0 on Clutch</button>
                    </div>
                </div>
                <div className='bg-[#212121] w-1/2 rounded-xl flex items-center justify-center relative bumper-btwos'>
                    <img className='w-28 bumper-image' src='./bumper/3.png' />
                    <div className='absolute bumper-btn bottom-5 left-5 border-[1px] px-3 rounded-3xl py-1'>
                        <button className='uppercase'>Busniess bootcamp alumni</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bumper
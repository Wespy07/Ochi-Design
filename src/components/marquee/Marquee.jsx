import React from 'react'
import './Marquee.css'

function Marquee() {
    return (
        <div className='marquee-box mt-6 uppercase h-[70vh] tracking-tighter pt-[4rem] w-full bg-[#004d43] text-white flex items-center'>
            <div className='w-full relative'>
                <div>
                    <div className='top-line'></div>
                    <div className='marquee-text font-grotesk2'>
                        <h3>we are ochi</h3>
                        <h3>we are ochi</h3>
                    </div>
                    <div className='bottom-line'></div>
                </div>
            </div>
        </div>
    )
}

export default Marquee
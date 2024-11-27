import React from 'react'
import './Marquee.css'

function Marquee() {
    return (
        <div className='marquee-box mt-7 uppercase h-[70vh] tracking-tighter pt-[64px] w-full bg-[#004d43] text-white flex items-center'>
            <div className='w-full'>
                <div>
                    <div className='marquee-text'>
                        <div className='top-line'></div>
                        <div className='marquee-content'>
                            <h3>we are ochi</h3>
                            <h3 className='second-text'>we are ochi</h3>
                        </div>
                        <div className='bottom-line'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marquee
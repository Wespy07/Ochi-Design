import React from 'react'
import './Marquee.css'
import { motion } from 'framer-motion'

function Marquee() {
    return (
        <div data-scroll data-scroll-speed='-0.1' className='marquee-box mt-7 uppercase h-[70vh] tracking-tighter pt-[64px] w-full bg-[#004d43] text-white flex items-center'>
            <div className='w-full'>
                <div>
                    <div className='marquee-text'>
                        <div className='top-line'></div>
                        <div className='marquee-content mt-20'>
                            <motion.h3
                                initial={{ x: 0 }}
                                animate={{ x: '-100%' }}
                                transition={{ ease: 'linear', repeat: Infinity, duration: 10 }} >we are ochi</motion.h3>
                            <motion.h3
                                initial={{ x: 0 }}
                                animate={{ x: '-100%' }}
                                transition={{ ease: 'linear', repeat: Infinity, duration: 10 }} className='second-text'>we are ochi</motion.h3>
                        </div>
                        <div className='bottom-line'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marquee
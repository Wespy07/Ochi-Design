import React from 'react'
import './Marquee.css'
import { motion } from 'framer-motion'

function Marquee() {
    return (
        <div className='marquee-box mt-7 uppercase h-[70vh] tracking-tighter pt-[64px] w-full bg-[#004d43] text-white flex items-center'>
            <div className='w-full'>
                <div>
                    <div className='marquee-text'>
                        <div className='top-line'></div>
                        <div className='marquee-content'>
                            <motion.h3 initial={{x:0}} animate={{x: '-100%'}} transition={{ease: 'linear', repeat: Infinity, duration: 5}} >we are ochi</motion.h3>
                            <motion.h3 initial={{x:0}} animate={{x: '-100%'}} transition={{ease: 'linear', repeat: Infinity, duration: 5}}  className='second-text'>we are ochi</motion.h3>
                        </div>
                        <div className='bottom-line'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marquee
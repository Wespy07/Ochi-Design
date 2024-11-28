import React, { useEffect, useRef, useState } from 'react'
import './Eyes.css'
import { div } from 'framer-motion/client';

function Eyes() {
    const [rotate, setRotate] = useState(0)
    const eyesRef = useRef(0)

    const handleMouseMove = (e) => {
        const rect = eyesRef.current.getBoundingClientRect();
        const isInside = (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        )
        if (!isInside) return;

        const centreX = e.clientX - (rect.left + rect.width / 2);
        const centreY = e.clientY - (rect.top + rect.height / 2);
        const eyesMovement = Math.atan2(centreY, centreX) * (180 / Math.PI);

        setRotate(eyesMovement - 180);
    };


    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='overflow-hidden'>
            <div data-scroll data-scroll-speed='-0.8' ref={eyesRef} className='h-[90vh] w-full flex items-center justify-center'>
                <div className='eyes-container max-md:gap-4 flex gap-14 justify-center items-center w-[70%] h-[75%]'>
                    <div className='max-md:h-[100px] max-md:w-[100px] h-[200px] w-[200px] bg-[#ddd] rounded-full flex items-center justify-center'>
                        <div className='max-md:h-[80px] max-md:w-[80px] h-[140px] w-[140px]  bg-[#212121] rounded-full flex justify-center items-center'>
                            <div style={{ transform: `rotate(${rotate}deg)` }} className='h-5 w-full rotate-45'>
                                <div className='h-[20px] w-[20px] bg-[#ddd] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='max-md:h-[100px] max-md:w-[100px] h-[200px] w-[200px] bg-[#ddd] rounded-full flex items-center justify-center'>
                        <div className='max-md:h-[80px] max-md:w-[80px] h-[140px] w-[140px]  bg-[#212121] rounded-full flex justify-center items-center'>
                            <div style={{ transform: `rotate(${rotate}deg)` }} className='h-5 w-full rotate-45'>
                                <div className='h-[20px] w-[20px] bg-[#ddd] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
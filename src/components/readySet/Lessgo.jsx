import React, { useState, useEffect, useRef } from 'react';
import './Lessgo.css';

function Lessgo() {
    const [rotate, setRotate] = useState(0);
    const eyesRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!eyesRef.current) return;

        const rect = eyesRef.current.getBoundingClientRect();
        const isInside = (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        );

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
        <div data-scroll data-scroll-speed='-0.03' ref={eyesRef} className="bg-[#004d43] w-full rounded-[25px] mt-2 flex flex-col justify-center items-center relative">
            <div data-scroll data-scroll-speed='0.35' className="lessgo-eyes w-full flex items-center justify-center absolute top-48 opacity-[0.97]">
                <div className="flex gap-3 justify-center items-center w-[70%] h-[75%]">
                    <div className="h-[200px] w-[200px] bg-[#ddd] rounded-full flex items-center justify-center">
                        <div className="h-[140px] w-[140px] bg-[#212121] rounded-full flex justify-center items-center">
                            <div style={{ transform: `rotate(${rotate}deg)` }}
                                className="h-5 w-full rotate-45"
                            >
                                <div className="h-[20px] w-[20px] bg-[#ddd] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[200px] w-[200px] bg-[#ddd] rounded-full flex items-center justify-center">
                        <div className="h-[140px] w-[140px] bg-[#212121] rounded-full flex justify-center items-center">
                            <div style={{ transform: `rotate(${rotate}deg)` }}
                                className="h-5 w-full rotate-45"
                            >
                                <div className="h-[20px] w-[20px] bg-[#ddd] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-40 mb-20">
                <div className="text-[244px] lessgo-text uppercase">
                    <h2 className='ready'>Ready</h2>
                    <h2 className='start'>to start</h2>
                    <h2 className='project'>the project?</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <button className="bg-[#151515] rounded-full uppercase px-10 py-5 lessgo-btn">
                        start the project
                        <i className="ml-4 rotate-90 fa-solid fa-arrow-up-long lessgo-arrow"></i>
                    </button>
                    <h3 className="font-light">OR</h3>
                    <button className="rounded-full uppercase px-10 py-5 lessgo-mail-btn">
                        wespy07@gmail.com
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Lessgo;

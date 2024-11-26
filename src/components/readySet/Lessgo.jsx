import React from 'react'
import './Lessgo.css'

function Lessgo() {
    return (
        <div className='bg-[#004d43] w-full rounded-[25px] mt-2 flex flex-col justify-center items-center relative'>


            <div className='w-full flex items-center justify-center absolute top-48 opacity-[0.97]'>
                <div className='flex gap-3 justify-center items-center w-[70%] h-[75%]'>
                    <div className='h-[200px] w-[200px] bg-[#ddd] rounded-full flex items-center justify-center'>
                        <div className='h-[140px] w-[140px] bg-[#212121] rounded-full flex justify-center items-center'>
                            <div className='h-[20px] w-[20px] bg-[#ddd] rounded-full'></div>
                            <div className=''>
                            </div>
                        </div>
                    </div>
                    <div className='h-[200px] w-[200px] bg-[#ddd] rounded-full flex items-center justify-center'>
                        <div className='h-[140px] w-[140px] bg-[#212121] rounded-full flex justify-center items-center'>
                            <div className='h-[20px] w-[20px] bg-[#ddd] rounded-full'></div>
                            <div className=''>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className='mt-40 mb-20'>
                <div className='text-[244px] lessgo-text uppercase'>
                    <h2>Ready</h2>
                    <h2>to start</h2>
                    <h2>the project?</h2>
                </div>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <button className='bg-[#212121] rounded-full uppercase px-10 py-5 lessgo-btn'>start the project<i className="ml-4 rotate-45 fa-solid fa-arrow-up-long"></i></button>
                    <h3 className='font-light'>OR</h3>
                    <button className='rounded-full uppercase px-10 py-5 lessgo-mail-btn'>wespy07@gmail.com</button>
                </div>
            </div>
        </div>
    )
}

export default Lessgo
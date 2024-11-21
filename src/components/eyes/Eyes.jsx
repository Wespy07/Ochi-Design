import React from 'react'
import './Eyes.css'

function Eyes() {
    return (
        <div className='h-[90vh] w-full flex items-center justify-center'>
            <div className='eyes-container flex gap-14 justify-center items-center w-[70%] h-[75%]'>
                <div className='h-[200px] w-[200px] bg-[#ddd] rounded-full flex items-center justify-center'>
                    <div className='h-[140px] w-[140px] bg-[#212121] rounded-full flex justify-center items-center'>
                            {/* <p className='text-3xl'>W</p> */}
                            <div className='h-[20px] w-[20px] bg-[#ddd] rounded-full'></div>
                        <div className=''>
                        </div>
                    </div>
                </div>
                <div className='h-[200px] w-[200px] bg-[#ddd] rounded-full flex items-center justify-center'>
                    <div className='h-[140px] w-[140px] bg-[#212121] rounded-full flex justify-center items-center'>
                            {/* <p className='text-3xl'>S</p> */}
                            <div className='h-[20px] w-[20px] bg-[#ddd] rounded-full'></div>
                        <div className=''>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
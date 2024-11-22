import React from 'react'

function Bumper() {
    return (
        <div className='bg-[#cdea68] px-12 py-16 w-full h-[600px] flex gap-5 justify-center items-center rounded-[25px]'>
            <div className='bg-[#004d43] w-1/2 h-[90%] rounded-xl'>
                <h1>left</h1>
            </div>
            <div className='w-1/2 h-[90%] flex gap-5'>
                <div className='w-1/2 bg-[#212121] rounded-xl'>
                    <h1>R1</h1>
                </div>
                <div className='bg-[#212121] w-1/2 rounded-xl'>
                    <h1>R2</h1>
                </div>
            </div>
        </div>
    )
}

export default Bumper
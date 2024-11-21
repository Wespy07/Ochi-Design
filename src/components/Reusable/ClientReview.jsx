import React from 'react'
import Pill from './Pill'

function ClientReview({company, username, service1, src, desc}) {
    return (
        <div className='text-lg border-t-[1px] border-b-[1px]'>
            <div className='flex px-14 gap-5 pt-5'>
                <div className='w-[25%]'>
                    <p>{company}</p>
                </div>
                <div className='w-[25%]'>
                    <p>Services:</p>
                    < Pill service1={service1}  />
                </div>
                <div className='w-[38%]'>
                    <p>{username}</p>
                    <div className='my-7'>
                        <img className='my-5 h-[111px] rounded-lg' src={src} />
                        <p className='tracking-tighter leading-[22px] text-[16px]'>{desc}</p>
                    </div>
                </div>
                <div className='w-[8%] flex flex-col items-end'>
                    <button>read</button>
                </div>
            </div>
        </div>
    )
}

export default ClientReview
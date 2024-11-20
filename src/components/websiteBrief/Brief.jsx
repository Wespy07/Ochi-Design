import React from 'react'
import './Brief.css'
import Button from '../Reusable/Button'

function Brief() {
    return (
        <div className='bg-[#cdea68] text-[#212121] w-full brief-container'>
            <div className='px-12 pb-12 pt-20 text-[58px] leading-none tracking-tight w-[85%] font-neue'>
                <p>Ochi is a <u>creative frontend website development</u> agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</p>
            </div>

            <div className='border-[1px] opacity-[0.5] w-full border-[#212121]'></div>

            <div className='w-full px-12 mt-5 flex pb-16'>
                <div className='w-1/2'>
                    <p>What you can expect:</p>
                </div>
                <div className='w-1/2 flex'>
                    <div className='w-1/2 pr-10'>
                        <p>
                            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                        </p>
                        <p className='mt-5'>
                            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                        </p>
                    </div>
                    <div className='w-1/2 flex items-end justify-center'>
                        <div>
                            <h4 className='text-xl'>S<span className='text-base'>:</span></h4>
                            <div className='flex flex-col leading-relaxed mt-3'>
                                <span><a className='custom-underline' href="#">Instagram</a></span>
                                <span><a className='custom-underline' href="#">Behance</a></span>
                                <span><a className='custom-underline' href="#">Facebook</a></span>
                                <span><a className='custom-underline' href="#">Linkedin</a></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='border-[1px] opacity-[0.5] w-full border-[#212121]'></div>

            <div className='w-full px-12 flex justify-evenly'>
                <div>
                    <h4 className='text-[58px]'>Our approach:</h4>
                    < Button />

                </div>

                <div className='py-5'>
                    <div className='rounded-xl overflow-hidden h-[470px] w-[660px] flex items-center justify-center'>

                        <img src="/brief.png" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Brief






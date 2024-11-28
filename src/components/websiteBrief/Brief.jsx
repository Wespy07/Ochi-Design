import React from 'react'
import './Brief.css'
import Button from '../Reusable/Button'

function Brief() {
    return (
        <div data-scroll data-scroll-speed='0.03' className='bg-[#cdea68] text-[#212121] w-full brief-container'>
            <div className='brief-info px-12 pb-12 pt-20 text-[58px] leading-none tracking-tight w-[85%] font-neue'>
                <p>Ochi is a <u>creative frontend website development</u> agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</p>
            </div>

            <div className='border-[1px] opacity-[0.5] w-full border-[#212121]'></div>

            <div className='w-full px-12 mt-5 flex pb-16 brief-expect-container'>
                <div className='w-1/2 brief-expect'>
                    <p>What you can expect:</p>
                </div>
                <div className='w-1/2 flex brief-second-container'>
                    <div className='w-1/2 pr-10 tracking-tight brief-second-box'>
                        <p>
                            We craft <u>stunning frontends</u> that don’t just turn heads—they leave jaws on the floor. Whether it’s dazzling designs for a solo startup or a full-scale web presence for your empire, we got you covered.
                        </p>
                        <p className='mt-5'>
                            Powered by holy waters of the Himalayas and amazing sleep disorders, we create frontend so smooth they could glide like Keanu Reeves dodging bullets in 'The Matrix'.
                        </p>
                    </div>
                    <div className='w-1/2 flex items-end justify-center brief-socials-box'>
                        <div className='brief-socials'>
                            <h4 className='max-md:text-base text-xl'>S<span className='text-base'>:</span></h4>
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

            <div className='w-full px-10 flex justify-evenly'>
                <div className='approach'>
                    <h4 className='text-[58px] our-appproach'>Our approach:</h4>
                    < Button text='Read more' />

                </div>

                <div className='pb-5'>
                    <div className='approach-image rounded-xl overflow-hidden h-[470px] flex items-center justify-center'>
                        <img className='rounded-2xl' src="./perfection.jpg" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Brief






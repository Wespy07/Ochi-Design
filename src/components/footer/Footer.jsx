import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='h-[100vh] w-full rounded-t-[25px] bg-[#191627] mt-2 px-12 flex gap-5'>
            <div className='w-[50%] h-full rounded-xl p-10 uppercase'>
                <h3 className='footer-title'>Jaw-</h3>
                <h3 className='footer-title'>Dropping</h3>
            </div>
            <div className='w-[50%] h-[80%] rounded-xl uppercase p-10'>
                <h3 className='footer-title'>websites</h3>
                <div className='flex h-full w-full gap-2'>
                    <div className='w-1/2 h-full flex flex-col justify-between'>
                        <div>
                            <h4 className='text-xl'>S<span className='text-base'>:</span></h4>
                            <div className='flex flex-col leading-relaxed mt-5'>
                                <span><a className='custom-underline' href="#">Instagram</a></span>
                                <span><a className='custom-underline' href="#">Behance</a></span>
                                <span><a className='custom-underline' href="#">Facebook</a></span>
                                <span><a className='custom-underline' href="#">Linkedin</a></span>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h4 className='text-xl'>L<span className='text-base'>:</span></h4>
                            <div className='flex flex-col leading-relaxed mt-5'>
                                <address className='flex flex-col'>
                                    <span><a className='custom-underline' href="#">202-1965 W 4th Ave</a></span>
                                    <span><a className='custom-underline' href="#">Vancouver, Canada</a></span>
                                    <br />
                                    <span><a className='custom-underline' href="#">30 Chukarina St</a></span>
                                    <span><a className='custom-underline' href="#">Lviv, Ukraine</a></span>
                                </address>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <h4 className='text-xl'>E<span className='text-base'>:</span></h4>
                            <div className='flex flex-col leading-relaxed mt-5'>
                                <address className='flex flex-col'>
                                    <span><a href='#' className='custom-underline'>wespy07@gmail.com</a></span>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 h-full flex justify-end items-center'>
                        <div>
                            <h4 className='text-xl'>M<span className='text-base'>:</span></h4>
                            <div className='flex flex-col tracking-tight mt-5'>
                                <span><a className='custom-underline' href="#">Home</a></span>
                                <span><a className='custom-underline' href="#">Services</a></span>
                                <span><a className='custom-underline' href="#">Our Work</a></span>
                                <span><a className='custom-underline' href="#">About Us</a></span>
                                <span><a className='custom-underline' href="#">Insights</a></span>
                                <span><a className='custom-underline' href="#">Contact Us</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className='h-[100vh] w-full rounded-t-[25px] bg-[#100e18] mt-2 flex gap-5 relative'>
                <div className='w-[50%] h-[80%] rounded-xl p-10 uppercase px-12'>
                    <h3 className='footer-title'>Jaw-</h3>
                    <h3 className='footer-title'>Dropping</h3>
                </div>
                <div className='w-[50%] h-[80%] rounded-xl uppercase p-10 px-12'>
                    <h3 className='footer-title'>websites</h3>
                    <div className='flex h-full w-full gap-2'>
                        <div className='w-1/2 h-[90%] flex flex-col justify-between'>
                            <div>
                                <h4 className='text-xl'>S<span className='text-base'>:</span></h4>
                                <div className='flex flex-col leading-relaxed mt-5'>
                                    <span><a className='underline-hover' href="#">Instagram</a></span>
                                    <span><a className='underline-hover' href="#">Behance</a></span>
                                    <span><a className='underline-hover' href="#">Facebook</a></span>
                                    <span><a className='underline-hover' href="#">Linkedin</a></span>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <h4 className='text-xl'>L<span className='text-base'>:</span></h4>
                                <div className='flex flex-col leading-relaxed mt-5'>
                                    <address className='flex flex-col'>
                                        <span><a className='underline-hover' href="#">202-1965 W 4th Ave</a></span>
                                        <span><a className='underline-hover' href="#">Vancouver, Canada</a></span>
                                        <br />
                                        <span><a className='underline-hover' href="#">30 Chukarina St</a></span>
                                        <span><a className='underline-hover' href="#">Lviv, Ukraine</a></span>
                                    </address>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <h4 className='text-xl'>E<span className='text-base'>:</span></h4>
                                <div className='flex flex-col leading-relaxed mt-5'>
                                    <address className='flex flex-col'>
                                        <span><a href='#' className='underline-hover'>wespy07@gmail.com</a></span>
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 h-full flex justify-end items-center'>
                            <div>
                                <h4 className='text-xl'>M<span className='text-base'>:</span></h4>
                                <div className='flex flex-col tracking-tight mt-5'>
                                    <span><a className='underline-hover' href="#">Home</a></span>
                                    <span><a className='underline-hover' href="#">Services</a></span>
                                    <span><a className='underline-hover' href="#">Our Work</a></span>
                                    <span><a className='underline-hover' href="#">About Us</a></span>
                                    <span><a className='underline-hover' href="#">Insights</a></span>
                                    <span><a className='underline-hover' href="#">Contact Us</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[10vh] w-full bg-[#0a090f] absolute bottom-0 px-12 flex items-center justify-between text-[11px]'>
                    <div><img src='./logo.svg' /></div>
                    <div className='uppercase'><i className="fa-regular fa-copyright"></i> Ochi-Designers 2024</div>
                    <div><p>Website by <a className='underline' href="https://github.com/Wespy07" target='_blank'>WESPY</a></p></div>
                </div>
            </div>
        </>
    )
}

export default Footer

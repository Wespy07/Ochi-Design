import React from 'react'
import './Dropdown.css'


function Dropdown({ dropdown, setDropdown }) {

    function handleClick() {
        setDropdown(!dropdown)
    }

    return (
        <div className='bg-[#161616]'>
            <nav>
                <div className='bg-[#161616] flex items-center justify-between px-[4rem] pt-[1.5rem] pb-[2.5rem] fixed z-[999] w-full top-0 border-b-[1px] border-white'>
                    <a href="/"><img src="logo.svg" alt="" /></a>
                    <i onClick={() => handleClick()} className="fa-solid fa-xmark text-[30px]"></i>
                </div>
            </nav>


            <div className='mt-[85px] nav-links uppercase flex flex-col gap-1 text-[80px] font-bold leading-none tracking-tight p-5'>
                <span><a href="#">Services</a></span>
                <span><a href="#">Our Work</a></span>
                <span><a href="#">About Us</a></span>
                <span><a href="#">Insights</a></span>
                <span><a href="#">Contact Us</a></span>
            </div>

            <div className='mt-12 p-5'>
                <div>
                    <h4 className='text-xl'>S<span className='text-base'>:</span></h4>
                    <div className='flex flex-col leading-relaxed'>
                        <span><a className='custom-underline' href="#">Instagram</a></span>
                        <span><a className='custom-underline' href="#">Behance</a></span>
                        <span><a className='custom-underline' href="#">Facebook</a></span>
                        <span><a className='custom-underline' href="#">Linkedin</a></span>
                    </div>
                </div>

                <div className='mt-5'>
                    <h4 className='text-xl'>L<span className='text-base'>:</span></h4>
                    <div className='flex flex-col leading-relaxed'>
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
                    <div className='flex flex-col leading-relaxed'>
                        <address className='flex flex-col'>
                            <span><a href='#' className='custom-underline'>wespy07@gmail.com</a></span>
                        </address>
                    </div>
                </div>

            </div>
        </div>






    )
}

export default Dropdown
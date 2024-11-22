import React, { useState } from 'react'
import Dropdown from '../sidemenu/Dropdown'

function Navbar() {

    const [dropdown, setDropdown] = useState(false)

    function handleClick() {
        setDropdown(!dropdown)
    }

    return (
        (dropdown === true ? < Dropdown setDropdown={setDropdown} dropdown={dropdown} /> : <>
            <nav className='max-w-[1800px] mx-auto relative'>
                <div className='mt-[24px] mx-[64px] flex items-center justify-between text-[18px]'>
                    <div className='w-[50%] flex'>
                        <a href="/">
                            <img src="logo.svg" alt="" />
                        </a>
                    </div>

                    <div className='max-lg:hidden w-[40%] flex gap-5 justify-center'>
                        <a className='underline-hover' href="/">Services</a>
                        <a className='underline-hover' href="/">Our Work</a>
                        <a className='underline-hover' href="/">About Us</a>
                        <a className='underline-hover' href="/">Insights</a>
                    </div>

                    <div className='max-lg:hidden w-[10%] ml-10 flex'>
                        <a className='underline-hover' href="/">Contact us</a>
                    </div>

                    <div>
                        <i onClick={() => handleClick()} className="lg:hidden fa-solid fa-bars text-[28px] absolute right-16 top-[2px]"></i>
                    </div>
                </div>
            </nav>
        </>)

    )
}

export default Navbar
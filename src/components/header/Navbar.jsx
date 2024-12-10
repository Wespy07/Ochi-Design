import React, { useState } from 'react'
import Dropdown from '../dropdown/Dropdown'
import { NavLink } from 'react-router'

function Navbar() {

    const [dropdown, setDropdown] = useState(false)

    function handleClick() {
        setDropdown(!dropdown)
    }

    return (
        (dropdown === true ? < Dropdown setDropdown={setDropdown} dropdown={dropdown} /> : <>
            <nav className='mt-[24px] max-w-[1800px] mx-auto relative top-0'>
                <div className='mx-[32px] flex items-center justify-between text-[18px]'>
                    <div className='w-[50%] flex'>
                        <NavLink to={'/'} href="/">
                            <img src="logo.svg" />
                        </NavLink>
                    </div>

                    <div className='max-lg:hidden w-[40%] flex gap-5 justify-center'>

                        <NavLink to={'/services'} className={({ isActive }) => isActive ? "underline-hover text-[#cdea68]" : "underline-hover text-white"} href="/">Services</NavLink>
                        <NavLink to={'/our-work'} className={({ isActive }) => isActive ? "underline-hover text-[#cdea68]" : "underline-hover text-white"} href="/">Our Work</NavLink>
                        <NavLink to={'/about-us'} className={({ isActive }) => isActive ? "underline-hover text-[#cdea68]" : "underline-hover text-white"} href="/">About Us</NavLink>
                        <NavLink to={'/insights'} className={({ isActive }) => isActive ? "underline-hover text-[#cdea68]" : "underline-hover text-white"} href="/">Insights</NavLink>
                    </div>

                    <div className='max-lg:hidden w-[10%] ml-10 flex'>
                        <NavLink to={'/contact-us'} className={({ isActive }) => isActive ? "underline-hover text-[#cdea68]" : "underline-hover text-white"} href="/">Contact us</NavLink>
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
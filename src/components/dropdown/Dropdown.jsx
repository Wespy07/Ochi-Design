import React from 'react'
import './Dropdown.css'
import { NavLink } from 'react-router'


function Dropdown({ dropdown, setDropdown }) {

    function handleClick() {
        setDropdown(!dropdown)
    }

    return (
        <nav>
            <div className='bg-[#161616] dropdown-container'>
                <div>
                    <div className='bg-[#161616] flex items-center justify-between px-[32px] pt-[24px] pb-[40px] fixed z-[999] w-full top-0 border-b-[1px] border-white'>
                        <NavLink href="/"><img src="logo.svg" /></NavLink>
                        <i onClick={() => handleClick()} className="fa-solid fa-xmark text-[30px]"></i>
                    </div>
                </div>


                <div className='mt-[85px] nav-links uppercase flex flex-col gap-1 text-[30px] font-bold leading-none tracking-tight p-5'>

                    <NavLink to={'/services'} className={({ isActive }) => isActive ? "underline-hover text-[#cdea68]" : "underline-hover text-white"} href="/">Services</NavLink>
                    <NavLink to={'/our-work'} className={({ isActive }) => isActive ? "underline-hover text-[#cdea68]" : "underline-hover text-white"} href="/">Our Work</NavLink>
                    <NavLink to={'/about-us'} className={({ isActive }) => isActive ? "underline-hover text-[#cdea68]" : "underline-hover text-white"} href="/">About Us</NavLink>
                    <NavLink to={'/insights'} className={({ isActive }) => isActive ? "underline-hover text-[#cdea68]" : "underline-hover text-white"} href="/">Insights</NavLink>
                    <NavLink to={'/contact-us'} className={({ isActive }) => isActive ? "underline-hover text-[#cdea68]" : "underline-hover text-white"} href="/">Contact us</NavLink>
                </div>

                <div className='mt-12 p-5'>
                    <div>
                        <h4 className='text-2xl'>S<span className='text-[15px]'>:</span></h4>
                        <div className='flex flex-col leading-relaxed text-[12px]'>
                            <span><a className='custom-underline' href="#">Instagram</a></span>
                            <span><a className='custom-underline' href="#">Behance</a></span>
                            <span><a className='custom-underline' href="#">Facebook</a></span>
                            <span><a className='custom-underline' href="#">Linkedin</a></span>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Dropdown
import React from 'react'
import './ProjectsPage.css'

function ProjectsPage(props) {
    console.log(props.tag1)
    return (
        <>
            <div className='text-base mt-3'>
                <div className='flex items-center justify-start gap-3'>
                    <i className="fa-solid fa-circle text-[10px]"></i>
                    <p>{props.title}</p>
                </div>
                <div className='h-[611px] mt-3 bg-[#141414] rounded-xl overflow-hidden'>
                    <img className='gotham-image h-full' src={props.image} alt={props.alt} />
                </div>
                <div className='mt-3 flex gap-2'>
                    {props.tag1 && (
                        <span className='gotham-btn border-[1px] px-5 py-1 rounded-full uppercase'>
                            {props.tag1}
                        </span>
                    )}
                    {props.tag2 && (
                        <span className='gotham-btn border-[1px] px-5 py-1 rounded-full uppercase'>
                            {props.tag2}
                        </span>
                    )}
                    {props.tag3 && (
                        <span className='gotham-btn border-[1px] px-5 py-1 rounded-full uppercase'>
                            {props.tag3}
                        </span>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProjectsPage
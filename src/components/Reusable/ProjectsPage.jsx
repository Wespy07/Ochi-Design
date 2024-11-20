import React from 'react'

function ProjectsPage(props) {
    return (
        <>
            <div className='text-base mt-3'>
                <div className='flex items-center justify-start gap-3'>
                    <i className="fa-solid fa-circle text-[10px]"></i>
                    <p>{props.title}</p>
                </div>
                <div className='h-[611px] mt-3 bg-[#141414] rounded-xl overflow-hidden'>
                    <img className='h-full object-contain' src={props.image} alt={props.alt} />
                </div>
            </div>
        </>
    )
}

export default ProjectsPage
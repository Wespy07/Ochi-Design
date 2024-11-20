import React, { useState } from 'react'
import './Projects.css'
import ProjectsPage from '../Reusable/ProjectsPage'

function Projects() {
    return (
        <div className='projects-container text-[58px] bg-[#141414]'>
            <h2 className='px-12 pt-16 pb-2'>Projects</h2>
            <div className="border-[1px] opacity-[0.5] w-full border-[#fff]"></div>

            <div className='flex justify-center gap-5 py-5 flex-wrap'>
                < ProjectsPage title='Penguin' image='./penguin.jpg' alt='penguin'/>
                < ProjectsPage title='Riddler' image='./riddler2.jpg' alt='riddler'/>
                < ProjectsPage title='Riddler' image='./riddler2.jpg' alt='riddler'/>
            </div>
        </div>
    )
}

export default Projects
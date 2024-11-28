import React, { useState } from 'react'
import './Projects.css'
import ProjectsPage from '../Reusable/ProjectsPage'
import Button from '../Reusable/Button'

function Projects() {
    return (
        <div className='projects-container max-xsm:text-[30px] max-sm:text-[40px] text-[58px] bg-[#111111]'>
            <h2 className='px-12 pt-16 pb-2'>Featured Projects</h2>
            <div className="border-[1px] opacity-[0.5] w-full border-[#fff]"></div>

            <div className='flex justify-center gap-5 py-5 flex-wrap'>
                < ProjectsPage title='Cardboard Spaceship' image='./projects/spaceship.png' alt='Cardboard Spaceship' tag1='branded template' tag2='sales deck' />
                < ProjectsPage title='Bean Revolution' image='./projects/bean.png' alt='Bean' tag1='pitch deck' tag2='audit' />
                < ProjectsPage title='Heritage Innovation' image='./projects/heritage.png' alt='Heritage' tag1='copywriting' tag2='slides design' tag3='corruption' />
                < ProjectsPage title='Trawa' image='./projects/trawa.jpg' alt='Trawa' tag1='design research' tag2='brand creativity' />
            </div>
                <div className='w-full mt-5 flex justify-center items-center projects-btn-container'>
                    <div className='w-[20%] text-xl max-md2:text-[16px] projects-btn'>
                        < Button text='load more' />
                    </div>
                </div>
        </div>
    )
}

export default Projects
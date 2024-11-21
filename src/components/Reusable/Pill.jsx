import React from 'react'
import './Button.css'

function Pill({ service1 }) {
    return (
        <div>
            <div className='mt-5'>
                <span className='pill'>{service1}</span>
            </div>
        </div>
    )
}

export default Pill
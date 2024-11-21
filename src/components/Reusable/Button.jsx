import './Button.css'


import React from 'react'

function Button({text}) {
  return (
    <button className='button-87 flex items-center'>{text} <i className="ml-4 rotate-45 fa-solid fa-arrow-up-long"></i></button>
  )
}

export default Button
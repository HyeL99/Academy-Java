import React from 'react'
import './Button.scss'

const Button = ({children}) => {
  return (
    <button className='Button'>{children}</button>
  )
}

export default Button
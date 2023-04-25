import React from 'react'

export const Button = ({children, title, type}) => {
  return (
    <button className='btn_' type={type}>
        <span>{title}</span>
        {children}
    </button>
  )
}

export const ButtonGroup = ({children, fullCol})=> {
    return(
        <div className={`btn_group ${fullCol ? 'full_' : null}`}>
            {children}
        </div>
    )
}

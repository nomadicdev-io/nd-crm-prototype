import Link from 'next/link'
import React from 'react'

export const Button = ({children, title, type, className}) => {
  return (
    <button className={`btn_ ${className}`} type={type}>
        <span>{title}</span>
        <i>{children}</i>
    </button>
  )
}

export const ButtonLink = ({children, title, href, className}) => {
  return (
    <Link className={`btn_ ${className}`} href={href}>
        <span>{title}</span>
        <i>{children}</i>
    </Link>
  )
}

export const ButtonGroup = ({children, fullCol})=> {
    return(
        <div className={`btn_group ${fullCol ? 'full_' : null}`}>
            {children}
        </div>
    )
}

export const IconButton = ({children, href, className})=> {
  return (
    <Link href={href} className={`btn_icon ${className}`}>
      <i>{children}</i>
    </Link>
  )
}

export const IconButtonSubmit = ({children, type, className})=> {
  return (
    <button className={`btn_icon ${className}`} type={type}>
      <i>{children}</i>
    </button>
  )
}
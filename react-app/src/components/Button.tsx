import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode;
    color?: "primary" | "secondary" | "danger" | "success";
    handleClick: () => void;
}

const Button = ({ children, handleClick, color }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={handleClick} >
      {children}
    </button>
  )
}

export default Button


import React from 'react'
import "../pages/Home.css"
import arrow from '../assets/arrow.png'
export const Button = ({text}) => {
  return (
    <div className="see">
    <p>{text}</p>
      <img src={arrow} alt="arrow" />
    </div>
  )
}

import React from 'react'
import {Link} from 'react-router-dom'

const Button = (props) => {
  return (
    <Link to={props.path}><button className='btn shadow-lg bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9]   #bg-blue-500 rounded-full p-1 px-2 lg:p-2 lg:px-3 text-[14px] lg:text-[16px] text-white cursor-pointer active:scale-95'>{props.btn}</button></Link>
  )
}
    // background: linear-gradient(90deg, #38bdf8, #0ea5e9);

export default Button
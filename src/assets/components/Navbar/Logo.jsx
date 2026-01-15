import React from 'react'
import {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'><p className='logo text-xl font-bold bg-linear-to-r from-[#CFA3A8] via-[#B7A0C9] to-[#9da5f0] bg-clip-text text-transparent'>ATSify</p></Link>
  )
}

export default Logo
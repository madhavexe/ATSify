import React from 'react'
import {Link} from 'react-router-dom'
import { House } from 'lucide-react';


const HomeIcon = () => {
  return (
     <Link className='text-black cursor-pointer' to='/'><House /></Link>
  )
}

export default HomeIcon
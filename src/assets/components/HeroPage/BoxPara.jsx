import React from 'react'

const BoxPara = (props) => {
  return (
    <p className='para text-gray-600 text-[.9rem] md:text-[1rem] text-center font-normal transition duration-500 group-hover:text-gray-900'>{props.para}</p>
  )
}

export default BoxPara
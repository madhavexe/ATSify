import React from 'react'

const BoxTitle = (props) => {
    return (
        <p className='box-title text-xl md:text-2xl font-semibold text-center text-[#1E293B] transition duration-500 group-hover:text-blue-500'>{props.title}</p>

    )
}

export default BoxTitle
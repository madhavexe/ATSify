import React from 'react'

const BoxIcon = (props) => {
    return (
        <div className='flex items-center justify-center p-2 h-12! w-12! md:h-16! md:w-16! rounded-2xl bg-gradient-to-br! from-blue-500 to-indigo-500 text-white shadow-md transition duration-700 group-hover:rotate-360 #group-hover:scale-105'>{props.icon}</div>
    )
}

export default BoxIcon
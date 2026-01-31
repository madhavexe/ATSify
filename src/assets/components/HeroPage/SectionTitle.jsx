import { div } from 'framer-motion/client'
import React from 'react'

const SectionTitle = (props) => {
  return (
    <p data-aos="fade-up" className='section-title px-6 md:px-0 md:mx-auto text-[1.5rem] md:text-[2rem] lg:text-[2.3rem]  font-semibold text-center leading-8 md:leading-11 lg:leading-13 md:w-[65%]'>{props.title}</p>
  )
}

export default SectionTitle
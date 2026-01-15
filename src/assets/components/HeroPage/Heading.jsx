import React from 'react'
import SectionTitle from './SectionTitle'
import SectionPara from './SectionPara'

const Heading = (props) => {
  return (
    <div className='flex w-[100%] md:w-[95%] flex-col gap-5 items-center'>
       <SectionTitle title={props.title}/>
       <SectionPara para={props.para}/>
    </div>
  )
}

export default Heading
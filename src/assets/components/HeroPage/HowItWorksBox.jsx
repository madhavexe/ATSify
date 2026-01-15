import React from 'react'
import SectionPara from './SectionPara'
import BoxTitle from './BoxTitle'
import BoxIcon from './BoxIcon'

const HowItWorksBox = (props) => {
  return (
    <div className='flex flex-col gap-6 items-center'>
        <BoxIcon icon={props.icon}/>
        <BoxTitle title={props.title}/>
        <SectionPara para={props.para}/>
    </div>
  )
}

export default HowItWorksBox
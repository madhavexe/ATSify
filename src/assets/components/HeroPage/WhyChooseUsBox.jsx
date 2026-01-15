import React from 'react'
import BoxTitle from './BoxTitle'
import BoxIcon from './BoxIcon'
import SectionPara from './SectionPara'

const WhyChooseUsBox = (props) => {
    return (
        <div className='shadow-lg w-88 h-88 bg-white flex flex-col justify-center items-center gap-8 p-8 rounded-2xl border-t-3 border-t-[#2563EB]'>
            <BoxIcon icon={props.icon} />
            <div className='flex flex-col gap-5'>
            <BoxTitle title={props.title} />
            <SectionPara para={props.para}/>
            </div>
        </div>
    )
}

export default WhyChooseUsBox
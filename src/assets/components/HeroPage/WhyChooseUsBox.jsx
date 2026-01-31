import React from 'react'
import BoxTitle from './BoxTitle'
import BoxIcon from './BoxIcon'
import BoxPara from './BoxPara'

const WhyChooseUsBox = (props) => {
    return (
        <div data-aos='fade-up'>
            <div className='group shadow-xl border border-slate-200 w-70 md:w-88 h-70 md:h-88 bg-white flex flex-col gap-4 justify-center items-center px-4 py-0 md:p-8 rounded-2xl border-t-3 border-t-[#2563EB] hover:border-[#2563EB] transition duration-500'>
            <BoxIcon icon={props.icon} />
            <div className='flex flex-col gap-4'>
            <BoxTitle title={props.title} />
            <BoxPara para={props.para}/>
            </div>
        </div>
        </div>
    )
}

export default WhyChooseUsBox
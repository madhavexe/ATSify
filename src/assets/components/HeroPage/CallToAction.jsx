import React from 'react'
import SectionTitle from './SectionTitle'
import SectionPara from './SectionPara'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className='bg-white w-full flex flex-col gap-10 items-center rounded-2xl border border-slate-200 md:shadow-sm py-10 lg:py-20 px-4 md:px-6 lg:px-0'>
      <SectionTitle title={'Ready to Beat the ATS & Get More Interviews?'} />
      <div data-aos="fade-right" className='flex justify-center items-center w-full'>
        <div className='group hover:border-2 hover:border-slate-400 transition duration-500 bg-[#fff] md:py-10 flex flex-col gap-4 md:gap-7 items-center p-4 text-balance md:p-7 md:w-[80%] lg:w-[40%] rounded-2xl border-2 border-slate-200 shadow-xl'>
          <SectionPara para={'Stop guessing why your resume gets rejected. Upload your resume, analyze ATS compatibility, and track your job applications — all in one place.'} />
          <Link to='/ResumeUpload'><button className='group-hover:-translate-y-2 transition duration-500 bton shadow-lg bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-xl p-2 px-3 text-sm md:text-lg text-white cursor-pointer active:scale-95'>Analyze My Resume</button></Link>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
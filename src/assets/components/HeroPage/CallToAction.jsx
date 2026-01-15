import React from 'react'
import SectionTitle from './SectionTitle'
import SectionPara from './SectionPara'
import Button from '../Navbar/Button'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className='flex flex-col gap-10 items-center mx-auto'>
        <SectionTitle title={'Ready to Beat the ATS & Get More Interviews?'} />
        <div className='bg-[#F8FAFC] py-10 flex flex-col gap-7 items-center p-7 lg:w-[77%] rounded-4xl shadow-lg'>
        <SectionPara para={'Stop guessing why your resume gets rejected. Upload your resume, analyze ATS compatibility, and track your job applications — all in one place.'} />
        <Link><button className='btn shadow-lg bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-xl p-2 px-3 text-xl text-white cursor-pointer active:scale-95'>Analyze My Resume</button></Link>
        </div>
    </div>
  )
}

export default CallToAction
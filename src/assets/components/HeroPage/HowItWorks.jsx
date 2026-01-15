import React from 'react'
import HowItWorksBox from './HowItWorksBox'
import { MoveRight, FileUp, Bot, ChartNoAxesCombined } from 'lucide-react'
import SectionTitle from './SectionTitle'


const HowItWorks = () => {
  return (
    <div className='lg:w-[89%] #pt-20 mx-auto flex flex-col gap-15 items-center'>
      <SectionTitle title={'Analyze Your Resume & Track Applications in 3 Simple Steps'} />
      <div className='md:mx-20 flex flex-col lg:flex-row items-center gap-10 rounded-4xl p-10 bg-[#F8FAFC] shadow-lg'>
      <HowItWorksBox icon={<FileUp size={88} />} title={'Upload Your Resume'} para={'Upload your resume in PDF or DOC format. Our system securely processes your resume and extracts key information required for ATS analysis.'}/>
      <MoveRight className='rotate-90 lg:rotate-0' strokeWidth={3} size={70} />
      <HowItWorksBox icon={<Bot size={88} />} title={'AI-Powered ATS Evaluation'} para={'Your resume is analyzed against ATS standards, keyword relevance, formatting, and role compatibility to identify strengths and gaps.'}/>
      <MoveRight className='rotate-90 lg:rotate-0' strokeWidth={3} size={70} />
      <HowItWorksBox icon={<ChartNoAxesCombined size={88} />} title={'Track Applications & Improve'} para={'View detailed feedback, track your job applications, and apply suggested improvements to increase your chances of shortlisting.'}/>
      </div>
    </div>
  )
}

export default HowItWorks
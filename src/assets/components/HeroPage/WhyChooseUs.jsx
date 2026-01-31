import React from 'react'
import SectionTitle from './SectionTitle'
import { Brain, WholeWord, AppWindow, TrendingUp, ClockFading, LockKeyhole } from 'lucide-react'
import WhyChooseUsBox from './WhyChooseUsBox'

const WhyChooseUs = () => {
  return (
    <div className='bg-white rounded-2xl border border-slate-200 py-10 md:py-15 lg:p-20 flex flex-col gap-15 justify-center items-center'>
        <SectionTitle title={'Why Choose Our ATS Resume Analyzer?'}/>
        <div className='flex justify-center items-center gap-10 md:gap-15 flex-wrap'>
            <WhyChooseUsBox icon={<Brain size={88} />} title={'ATS-Friendly Resume Analysis'} para={'Get insights based on real Applicant Tracking System rules used by recruiters and companies.'} />
            <WhyChooseUsBox icon={<WholeWord size={88} />} title={'Keyword & Role Matching'} para={'Identify missing keywords and understand how well your resume matches specific job descriptions.'} />
            <WhyChooseUsBox icon={<AppWindow size={88} />} title={'Application Tracking'} para={'Keep all your job applications organized and monitor their progress from one dashboard.'} />
            <WhyChooseUsBox icon={<TrendingUp size={88} />} title={'Actionable Feedback'} para={'Receive clear suggestions on formatting, content, and structure to improve resume performance.'} />
            <WhyChooseUsBox icon={<ClockFading size={88} />} title={'Save Time & Effort'} para={'Avoid manual tracking and repeated edits — analyze once and apply smarter.'} />
            <WhyChooseUsBox icon={<LockKeyhole size={88} />} title={'Secure & Private'} para={'Your resume data is handled securely and never shared with third parties.'} />
        </div>
    </div>
  )
}

export default WhyChooseUs
import React from 'react'
import Navbar from '../assets/components/Navbar/Navbar'
import ResumeCards from '../assets/components/HeroPage/ResumeCards'
import HowItWorks from '../assets/components/HeroPage/HowItWorks'
import CallToAction from '../assets/components/HeroPage/CallToAction'
import WhyChooseUs from '../assets/components/HeroPage/WhyChooseUs'
import Footer from '../assets/components/Footer'
import FaqParent from '../assets/components/FaqParent'

const Hero = () => {
  return (
    <div className='bg-[url("./../public/Resume-BG.svg")]! bg-cover w-screen lg:w-full md:p-5 lg:p-7 flex flex-col items-center gap-10 md:gap-25'>
        <Navbar />
        <ResumeCards />
        <HowItWorks />
        <CallToAction />
        <WhyChooseUs />
        <FaqParent />
        <Footer />
    </div>
  )
}

export default Hero



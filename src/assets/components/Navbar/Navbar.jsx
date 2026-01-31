// import React from 'react'
// import {Link} from 'react-router-dom'
// import Logo from './Logo'
// import Button from './Button'

// const Navbar = () => {
//   return (
//    <nav className='flex justify-between items-center p-3 px-5 bg-amber-50 w-full md:w-[80%] lg:w-[70%]  xl:w-[50%] mx-auto rounded-full'>
//     <Logo />
//     <div className='hidden md:flex gap-5 items-center'>
//     <Button btn={'Sign In'} path={'/SignIn'} />
//     <Button btn={'Upload Resume'} path={'/ResumeUpload'} />
//     <Button btn={'Analysis'} path={'/Analysis'} />
//     <Button btn={'Contact Us'} path={'/ContactUs'} />
//     </div>
//    </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import Logo from './Logo'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>

      <nav data-aos="fade-right" className='flex justify-between items-center p-5 md:p-3 px-5 bg-white w-full md:w-[80%] lg:w-[70%] xl:w-[50%] mx-auto md:rounded-full relative z-50'>
        <Logo />


        <div className='hidden md:flex gap-5 items-center'>
          <Button btn='Sign In' path='/SignIn' />
          <Button btn='Upload Resume' path='/ResumeUpload' />
          <Button btn='Analysis' path='/Analysis' />
          <Button btn='Contact Us' path='/ContactUs' />
        </div>

        <button
          className='md:hidden flex flex-col gap-1'
          onClick={() => setIsOpen(true)}
        >
          <span className='w-6 h-0.5 bg-black'></span>
          <span className='w-6 h-0.5 bg-black'></span>
          <span className='w-6 h-0.5 bg-black'></span>
        </button>
      </nav>


      {isOpen && (
        <div className='fixed inset-0 bg-black/40 z-40 flex justify-center items-start pt-20'>
          <div className='bg-white w-[80%] max-w-sm rounded-2xl p-6 relative animate-slideDown'>
            

            <button
              className='absolute top-4 right-4 text-xl'
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <div className='flex flex-col gap-4 text-center'>
              <Button btn='Sign In' path='/SignIn' />
              <Button btn='Upload Resume' path='/ResumeUpload' />
              <Button btn='Analysis' path='/Analysis' />
              <Button btn='Contact Us' path='/ContactUs' />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar

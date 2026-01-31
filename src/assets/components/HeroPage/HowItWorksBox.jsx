import React from 'react'
import BoxTitle from './BoxTitle'
import BoxIcon from './BoxIcon'
import BoxPara from './BoxPara'
import { div } from 'framer-motion/client'

const HowItWorksBox = (props) => {
  return (
  <div data-aos="fade-down" className='group'>
      <div className='flex flex-col gap-3 md:gap-5 lg:gap-6 items-center shadow-lg border-2 border-slate-200 w-full lg:w-[320px] rounded-2xl p-5 hover:-translate-y-5 hover:border-slate-300 transition duration-500'>
        <BoxIcon icon={props.icon}/>
        <BoxTitle title={props.title}/>
        <BoxPara para={props.para}/>
    </div>
  </div>
  )
}

export default HowItWorksBox


// import React from 'react'
// import { motion } from 'framer-motion'

// const HowItWorksBox = ({ icon, title, para, step }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//       className="group flex flex-col items-center text-center gap-6 
//                  bg-white rounded-2xl p-8 w-full lg:w-[320px]
//                  border border-slate-100 shadow-sm"
//     >
//       {/* Step Number */}
//       <span className="text-sm font-semibold tracking-widest text-blue-500">
//         STEP {step}
//       </span>

//       {/* Icon */}
//       <motion.div
//         whileHover={{ scale: 1.12 }}
//         transition={{ type: 'spring', stiffness: 300 }}
//         className="flex items-center justify-center w-16 h-16 rounded-2xl
//                    bg-gradient-to-br from-blue-500 to-indigo-500
//                    text-white shadow-md"
//       >
//         {icon}
//       </motion.div>

//       {/* Title */}
//       <h3 className="text-lg font-semibold text-slate-900">
//         {title}
//       </h3>

//       {/* Description */}
//       <p className="text-sm leading-relaxed text-slate-600">
//         {para}
//       </p>
//     </motion.div>
//   )
// }

// export default HowItWorksBox

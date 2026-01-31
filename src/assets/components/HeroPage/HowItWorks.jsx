import React from 'react'
import HowItWorksBox from './HowItWorksBox'
import { MoveRight, FileUp, Bot, ChartNoAxesCombined } from 'lucide-react'
import SectionTitle from './SectionTitle'


const HowItWorks = () => {
  return (
    <div className='bg-[#fff] rounded-2xl shadow-lg border border-slate-200 py-10 lg:py-20 md:px-5 w-full #lg:w-[89%] #pt-20 mx-auto flex flex-col gap-8 lg:gap-15 items-center'>
      <SectionTitle title={'Analyze Your Resume & Track Applications in 3 Simple Steps'} />
      <div className='flex flex-col lg:flex-row items-center justify-center gap-10 rounded-2xl p-6 md:p-10 bg-[#fff] lg:shadow-sm lg:border-2 lg:border-slate-100'>
      <HowItWorksBox icon={<FileUp size={60} />} title={'Upload Your Resume'} para={'Upload your resume in PDF or DOC format. Our system securely processes your resume and extracts key information required for ATS analysis.'}/>
      <MoveRight className='hover:rotate-360 hover:text-slate-500 transition duration-500 rotate-90 lg:rotate-0 text-slate-400' strokeWidth={3} size={50} />
      <HowItWorksBox icon={<Bot size={60} />} title={'AI-Powered ATS Evaluation'} para={'Your resume is analyzed against ATS standards, keyword relevance, formatting, and role compatibility to identify strengths and gaps.'}/>
      <MoveRight className='hover:rotate-360 hover:text-slate-500 transition duration-500 rotate-90 lg:rotate-0 text-slate-400' strokeWidth={3} size={50} />
      <HowItWorksBox icon={<ChartNoAxesCombined size={60} />} title={'Track Applications & Improve'} para={'View detailed feedback, track your job applications, and apply suggested improvements to increase your chances of shortlisting.'}/>
      </div>
    </div>
  )
}

export default HowItWorks

// import React from 'react'
// import HowItWorksBox from './HowItWorksBox'
// import { MoveRight, FileUp, Bot, ChartNoAxesCombined } from 'lucide-react'
// import SectionTitle from './SectionTitle'
// import { motion } from 'framer-motion'

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.25,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   },
// }

// const HowItWorks = () => {
//   return (
//     <section className="w-full py-20 shadow-lg rounded-3xl flex justify-center bg-gradient-to-b from-white to-[#F8FAFC]">
//       <div className="w-full max-w-7xl px-6 flex flex-col justify-center items-center gap-16">

//         {/* Title Animation */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <SectionTitle title="Analyze Your Resume & Track Applications in 3 Simple Steps" />
//         </motion.div>

//         {/* Cards Container */}
//         <motion.div
//           className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-8 
//                      bg-white rounded-3xl p-10 lg:p-14 shadow-xl border border-slate-100"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <motion.div variants={itemVariants}>
//             <HowItWorksBox
//               step="01"
//               icon={<FileUp size={42} />}
//               title="Upload Your Resume"
//               para="Upload your resume in PDF or DOC format. Our system securely processes your resume and extracts key information required for ATS analysis."
//             />
//           </motion.div>

//           <MoveRight
//             className="hidden lg:block text-slate-300"
//             strokeWidth={2.5}
//             size={56}
//           />

//           <motion.div variants={itemVariants}>
//             <HowItWorksBox
//               step="02"
//               icon={<Bot size={42} />}
//               title="AI-Powered ATS Evaluation"
//               para="Your resume is analyzed against ATS standards, keyword relevance, formatting, and role compatibility to identify strengths and gaps."
//             />
//           </motion.div>

//           <MoveRight
//             className="hidden lg:block text-slate-300"
//             strokeWidth={2.5}
//             size={56}
//           />

//           <motion.div variants={itemVariants}>
//             <HowItWorksBox
//               step="03"
//               icon={<ChartNoAxesCombined size={42} />}
//               title="Track Applications & Improve"
//               para="View detailed feedback, track job applications, and apply suggested improvements to increase your chances of shortlisting."
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default HowItWorks

// import React from 'react'
// import Heading from '../assets/components/HeroPage/Heading';
// import Navbar from '../assets/components/Navbar/Navbar';
// import Footer from '../assets/components/Footer';

// const ResumeUpload = () => {
//   return (
//     <div className="min-h-screen md:p-7 md:px-10 bg-[url('./../public/Resume-BG.svg')]! bg-cover flex flex-col items-center justify-center gap-10 md:gap-20">
//       <Navbar />
//       <div>
//         <Heading title={'Smart Feedback for your dream job'} para={'Drop your resume for an ATS score and improvement tips.'} />
//         </div>
//       <div data-aos='fade-down' className="w-full lg:w-[60%] m-auto relative rounded-2xl bg-white/60 backdrop-blur-xl px-6 py-8 sm:px-10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.15)] ring-1 ring-white/40">
//         <form className="space-y-6">

//           <div data-aos='fade-up'>
//             <label className="block text-xs font-medium text-gray-600 mb-1">
//               Company Name
//             </label>
//             <input
//               type="text"
//               className="w-full text-black! placeholder-black! rounded-lg border border-gray-200 bg-white/80 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
//             />
//           </div>


//           <div data-aos='fade-up'>
//             <label className="block text-xs font-medium text-gray-600 mb-1">
//               Job Title
//             </label>
//             <input
//               type="text"
//               className="w-full text-black! placeholder-black! rounded-lg border border-gray-200 bg-white/80 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
//             />
//           </div>


//           <div data-aos='fade-up'>
//             <label className="block text-xs font-medium text-gray-600 mb-1">
//               Job Description
//             </label>
//             <textarea
//               rows={4}
//               placeholder="Write a clear & concise job description with responsibilities & expectations..."
//               className="w-full resize-none rounded-lg border border-gray-200 bg-white/80 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
//             />
//           </div>


//           <div data-aos='fade-up'>
//             <label className="block text-xs font-medium text-gray-600 mb-2">
//               Upload Resume
//             </label>
//             <div className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-indigo-200 bg-white/70 py-8 text-center">
//               <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
//                 ⬆️
//               </div>
//               <p className="text-sm text-gray-600">
//                 Click to upload or drag and drop
//               </p>
//               <p className="text-xs text-gray-400">
//                 PDF, PNG or JPG (max. 10MB)
//               </p>
//             </div>
//           </div>


//           <div data-aos='fade-up'>
//             <button
//             type="submit"
//             className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 py-3 text-sm font-medium text-white shadow-[0_12px_30px_-8px_rgba(79,70,229,0.8)] hover:brightness-110 active:scale-[0.98] transition"
//           >
//             Save & Analyze Resume
//           </button>
//           </div>
//         </form>
//       </div>

//       <Footer />

//     </div>
//   );
// }

// export default ResumeUpload


import React, { useState } from 'react'
import Heading from '../assets/components/HeroPage/Heading';
import Navbar from '../assets/components/Navbar/Navbar';
import Footer from '../assets/components/Footer';
import { useNavigate } from 'react-router-dom';

const ResumeUpload = () => {

  const navigate = useNavigate()

  const [resume, setResume] = useState(null)
  const [companyName, setCompanyName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setResume(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = new FormData()
    formData.append("resume", resume)

    console.log("Uploaded file:", resume)
  }

  return (
    <div className="min-h-screen md:p-7 md:px-10 bg-[url('./../public/Resume-BG.svg')]! bg-cover flex flex-col items-center justify-center gap-10 md:gap-20">
      <Navbar />

      <div>
        <Heading
          title={'Smart Feedback for your dream job'}
          para={'Drop your resume for an ATS score and improvement tips.'}
        />
      </div>

      <div data-aos='fade-down' className="w-full lg:w-[60%] m-auto relative rounded-2xl bg-white/60 backdrop-blur-xl px-6 py-8 sm:px-10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.15)] ring-1 ring-white/40">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Company */}
          <div data-aos='fade-up'>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Company Name
            </label>
            <input
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value)
              }}
              type="text"
              className="w-full text-black! rounded-lg border border-gray-200 bg-white/80 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
            />
          </div>

          {/* Job title */}
          <div data-aos='fade-up'>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Job Title
            </label>
            <input
              value={jobTitle}
              onChange={(e) => {
                setJobTitle(e.target.value)
              }}
              type="text"
              className="w-full text-black! rounded-lg border border-gray-200 bg-white/80 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
            />
          </div>

          {/* Job description */}
          <div data-aos='fade-up'>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Job Description
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => {
                setJobDescription(e.target.value)
              }}
              rows={4}
              placeholder="Write a clear & concise job description..."
              className="w-full resize-none rounded-lg border border-gray-200 bg-white/80 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
            />
          </div>

          {/* Upload resume */}
          <div data-aos='fade-up'>
            <label className="block text-xs font-medium text-gray-600 mb-2">
              Upload Resume
            </label>

            <label className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-indigo-200 bg-white/70 py-8 text-center cursor-pointer">

              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                ⬆️
              </div>

              <p className="text-sm text-gray-600">
                Click to upload or drag and drop
              </p>

              <p className="text-xs text-gray-400">
                Upload any file (max 10MB)
              </p>

              {resume && (
                <p className="text-sm text-indigo-600 mt-2 font-medium">
                  Selected: {resume.name}
                </p>
              )}
            </label>
          </div>

          {/* Submit */}
          <div data-aos='fade-up'>
            <button
              onClick={() => {
                localStorage.setItem('fileUploaded', 'uploaded')
                // if (companyName && jobTitle && jobDescription && resume) {
                //   alert('Resume Uploaded Sucessfully')
                //   navigate('/Analysis')
                // } 
                // if (companyName && jobTitle && jobDescription && !resume){
                //   alert('Please Upload Your Resume')

                // }else{
                //   alert('Please fill all the required details')
                // }


                if (!companyName || !jobTitle || !jobDescription) {
                  alert('Please fill all the required details')
                  return
                }

                if (!resume) {
                  alert('Please Upload Your Resume')
                  return
                }
                alert('Resume Uploaded Sucessfully')
                navigate('/Analysis')

              }}
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 py-3 text-sm font-medium text-white shadow-[0_12px_30px_-8px_rgba(79,70,229,0.8)] hover:brightness-110 active:scale-[0.98] transition"
            >
              Save & Analyze Resume
            </button>
          </div>

        </form>
      </div>

      <Footer />
    </div>
  )
}

export default ResumeUpload


import React from 'react'
import Heading from '../assets/components/HeroPage/Heading';
import Navbar from '../assets/components/Navbar/Navbar';
import Footer from '../assets/components/Footer';

const ResumeUpload = () => {
  return (
    <div className="min-h-screen p-7 md:px-10 bg-[url('./../public/Resume-BG.svg')]! bg-cover flex flex-col items-center justify-center gap-20">
      <Navbar />
      <div>
        <Heading title={'Smart Feedback for your dream job'} para={'Drop your resume for an ATS score and improvement tips.'} />
        </div>
      <div className="w-full lg:w-[60%] m-auto relative rounded-2xl bg-white/60 backdrop-blur-xl px-6 py-8 sm:px-10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.15)] ring-1 ring-white/40">
        <form className="space-y-6">
      
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Company Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 bg-white/80 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
            />
          </div>

       
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Job Title
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 bg-white/80 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
            />
          </div>

       
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Job Description
            </label>
            <textarea
              rows={4}
              placeholder="Write a clear & concise job description with responsibilities & expectations..."
              className="w-full resize-none rounded-lg border border-gray-200 bg-white/80 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
            />
          </div>

        
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-2">
              Upload Resume
            </label>
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-indigo-200 bg-white/70 py-8 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                ⬆️
              </div>
              <p className="text-sm text-gray-600">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-400">
                PDF, PNG or JPG (max. 10MB)
              </p>
            </div>
          </div>

         
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 py-3 text-sm font-medium text-white shadow-[0_12px_30px_-8px_rgba(79,70,229,0.8)] hover:brightness-110 active:scale-[0.98] transition"
          >
            Save & Analyze Resume
          </button>
        </form>
      </div>

      <Footer />

    </div>
  );
}

export default ResumeUpload

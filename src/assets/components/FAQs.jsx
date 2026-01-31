import React from 'react'

const FAQs = ({ question, answer }) => {
    return (
        <div data-aos='fade-right'> 
            <div className='border border-slate-200 w-full bg-[#2e2e2e] text-white #bg-gradient-to-r #from-[#fdd7e0] #to-[#f6b8c7] shadow-lg py-[7px] pl-[10px] rounded-lg hover:bg-[#444444] transiton duration-500'>
                <details className="text-[14px] md:text-[16px] cursor-pointer lg:w-[35rem]">
                    <summary>{question}</summary>
                    <p className="mt-[10px]">{answer}</p>
                </details>
            </div>
        </div>

    )
}

export default FAQs

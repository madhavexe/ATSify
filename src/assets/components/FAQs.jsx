import React from 'react'

const FAQs = ({ question, answer }) => {
    return (
        <div className='w-full'>
            <details className="cursor-pointer w-[40rem] p-[7px] border-2 border-[gray-500] rounded-[10px] #bg-[rgba(225,188,188,0.7)] bg-gradient-to-r from-[#fdd7e0] to-[#f6b8c7]
max-[1024px]:w-[35rem] max-[768px]:w-[90%] max-[480px]:w-[95%]">
                <summary>{question}</summary>
                <p className="mt-[10px]">{answer}</p>
            </details>
        </div>
    )
}

export default FAQs

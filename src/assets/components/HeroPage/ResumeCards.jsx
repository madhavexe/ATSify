import React from 'react'
import Heading from './Heading';

const ResumeCards = () => {

    const applications = [
        {
            id: 1,
            resume: "./../public/card1.jpg"
        },
        {
            id: 2,
            resume: "./../public/card2.jpg"
        },
        {
            id: 3,
            resume: "./../public/card3.jpg"
        },
        {
            id: 4,
            resume: "./../public/card4.jpg"
        },
        {
            id: 5,
            resume: "./../public/card5.jpg"
        },
        {
            id: 6,
            resume: "./../public/card6.jpg"
        }
    ];


    return (
        <div className='flex w-full flex-col gap-10 items-center justify-center'>
            <Heading title={'Track Your Applications & Resume Ratings'} para={'Review your submissions and check AI-powered feedback'} />
            <div className='flex lg:flex-row justify-center flex-wrap gap-10'>
                {applications.map((elem, idx) => {
                    return <div className='w-100 md:w-80 lg:w-100 shadow-lg rounded-4xl overflow-hidden' key={elem.idx}>
                        <img className='w-full h-full' src={elem.resume} alt="resume" />
                    </div>
                })}
            </div>
        </div>
    )
}

export default ResumeCards
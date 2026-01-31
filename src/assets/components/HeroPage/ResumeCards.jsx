import React from 'react';
import Heading from './Heading';

const ResumeCards = () => {
    const applications = [
        { id: 1, resume: "/card1.jpg" },
        { id: 2, resume: "/card2.jpg" },
        { id: 3, resume: "/card3.jpg" },
        { id: 4, resume: "/card4.jpg" },
        { id: 5, resume: "/card5.jpg" },
        { id: 6, resume: "/card6.jpg" }
    ];

    return (
        <div className='flex w-full flex-col py-20 md:py-0 gap-10 items-center justify-center'>
            <Heading title={'Track Your Applications & Resume Ratings'} para={'Review your submissions and check AI-powered feedback'} />
            <div className='flex lg:flex-row justify-center flex-wrap gap-10'>
                {applications.map((elem) => (
                    <div data-aos="fade-up" className='w-[340px] md:w-80 lg:w-100 shadow-lg rounded-4xl overflow-hidden' key={elem.id}>
                        <img className='w-full h-full' src={elem.resume} alt="resume" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResumeCards;

import React from 'react'
import FAQs from './FAQs.jsx'
import Heading from './HeroPage/Heading.jsx'

const faqs = [
    { question: "How do I create an account?", answer: "Click on the sign up button and fill in your details." },
    // { question: "I forgot my password, what should I do?", answer: "Use the forgot password option to reset your password." },
    // { question: "How can I contact customer support?", answer: "You can contact support using the contact form or email us." },
    { question: "Can I update my profile information?", answer: "Yes, you can update your profile from the settings page." },
    { question: "Is my data safe?", answer: "Yes, we use secure methods to protect your data." },
    { question: "How do I change my password?", answer: "Go to account settings and select 'Change Password'." },
    { question: "Can I delete my account?", answer: "Yes, you can delete your account from the privacy settings." },
    // { question: "Do you have a mobile app?", answer: "Yes, our app is available on both iOS and Android." },
    { question: "How do I subscribe to newsletters?", answer: "You can subscribe via the newsletter section at the bottom of the page." },
    // { question: "Can I track my orders?", answer: "Yes, order tracking is available in your account dashboard." }
]

const FaqParent = () => {
    return (
        <div className="overflow-x-hidden bg-white border border-slate-200 rounded-2xl flex flex-col items-center w-full m-0 box-border capitalize py-10 px-4 md:p-10 md:py-15">

            <Heading title={'frequently asked questions'} para={'trusted in more then 100 countries and 5 million customers'} />

            <div className="flex flex-col items-center lg:flex-row py-[5%] gap-8 max-[1024px]:justify-center max-[768px]:flex-col max-[768px]:items-center">

                <div data-aos="fade-right" className='w-full'>
                    <div className="lg:flex-1 p-5 lg:p-8 w-full flex flex-col gap-[1.3rem] rounded-[20px] bg-white shadow-lg border-2 border-slate-200 hover:border-2 hover:border-slate-400 transition duration-500">
                        {faqs.map((elem, index) => (
                            <FAQs key={index} question={elem.question} answer={elem.answer} />
                        ))}
                    </div>
                </div>

                <div className='w-full h-full'>
                    <div className="h-full lg:flex-1 flex flex-col justify-center items-center text-center bg-white border-2 border-slate-200 shadow-lg rounded-3xl p-5 md:p-7 lg:p-10 hover:border-2 hover:border-slate-400 transition duration-500">
                        <p data-aos='fade-left' className="text-[1.3rem] font-bold max-[480px]:text-base">
                            ask any question
                        </p>

                        <p data-aos='fade-left' className="text-gray-500 font-semibold mt-4">
                            feel to ask any question you have. we are here to help!
                        </p>

                        <form>
                            <input data-aos='fade-left'
                                type="text"
                                placeholder="Write your question here....."
                                className="w-full mt-4 mb-1.5 h-[38px] rounded-[10px] p-[5px] border-2 border-gray-500 max-[480px]:h-[30px]"
                            />
                            <button data-aos='fade-left' className="rounded-[10px] bg-[#2e2e2e] hover:bg-[#444444] transition duration-500 text-white font-semibold text-sm  max-[480px]:w-full">
                                Submit Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqParent

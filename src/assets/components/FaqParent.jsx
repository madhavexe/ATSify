import React from 'react'
import FAQs from './FAQs.jsx'
import Heading from './HeroPage/Heading.jsx'

const faqs = [
    { question: "How do I create an account?", answer: "Click on the sign up button and fill in your details." },
    { question: "I forgot my password, what should I do?", answer: "Use the forgot password option to reset your password." },
    { question: "How can I contact customer support?", answer: "You can contact support using the contact form or email us." },
    { question: "Can I update my profile information?", answer: "Yes, you can update your profile from the settings page." },
    { question: "Is my data safe?", answer: "Yes, we use secure methods to protect your data." },
    { question: "How do I change my password?", answer: "Go to account settings and select 'Change Password'." },
    { question: "Can I delete my account?", answer: "Yes, you can delete your account from the privacy settings." },
    { question: "Do you have a mobile app?", answer: "Yes, our app is available on both iOS and Android." },
    { question: "How do I subscribe to newsletters?", answer: "You can subscribe via the newsletter section at the bottom of the page." },
    { question: "Can I track my orders?", answer: "Yes, order tracking is available in your account dashboard." }
]

const FaqParent = () => {
    return (
        <div className="m-0 p-0 box-border capitalize">

            <Heading title={'frequently asked questions'} para={'trusted in more then 100 countries and 5 million customers'} />

            <div className="flex justify-evenly p-[5%] flex-wrap gap-8 max-[1024px]:justify-center max-[768px]:flex-col max-[768px]:items-center max-[768px]:p-[3%]">

                <div className="p-7 flex flex-col justify-center items-center gap-[1.3rem] rounded-[20px] bg-white shadow-lg">
                    {faqs.map((elem, index) => (
                        <FAQs key={index} question={elem.question} answer={elem.answer} />
                    ))}
                </div>

                <div className="text-center">
                    {/* <img
                        src="https://i.pinimg.com/1200x/d4/0f/f2/d40ff21b0251c7f1013e7478afbfaa7f.jpg"
                        alt="img"
                        className="w-[23rem] h-[23rem] object-cover max-[1024px]:w-[18rem] max-[1024px]:h-72 max-[768px]:w-[80%] max-w-[15rem] max-[480px]:max-w-[12rem]"
                    /> */}

                    <p className="text-[1.3rem] font-bold max-[480px]:text-base">
                        ask any question
                    </p>

                    <p className="text-gray-500 font-semibold mt-4">
                        feel to ask any question you have. we are here to <br />help!
                    </p>

                    <form>
                        <input
                            type="text"
                            placeholder="Write your question here....."
                            className="w-full mt-4 h-[35px] rounded-[10px] p-[5px] border-2 border-gray-500 max-[480px]:h-[30px]"
                        />
                        <br />
                        <button className="rounded-[10px] bg-[#020617] text-white font-semibold text-base mt-4 max-[480px]:w-full">
                            Submit Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FaqParent

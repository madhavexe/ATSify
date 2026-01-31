import React from 'react'

const Footer = () => {
    return (
        <div data-aos='fade-up' className='border border-slate-200 capitalize w-full shadow-lg overflow-hidden rounded-2xl'>

            <div id="childone">
                <div data-aos='fade-up'>
                    <p id="heading">marketing pro</p>

                    <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing
                        elit. Deserunt explicabo corrupti<br /> nisi officia sed perspiciatis minus ipsa doloribus,
                        <br /> dolores harum itaque molestias dignissimos libero <br />
                        nesciunt consequuntur quasi animi similique dolor?</p>

                    <div className='icondiv'>
                        {/* 123 */}
                    </div>

                </div>

                <div data-aos='fade-up'>
                    <p id="heading">services</p>
                    <ul>
                        <li>digital strategy</li>
                        <li>content marketing</li>
                        <li>seo optimixation</li>
                        <li>social media</li>
                        <li>analysis & reports</li>
                    </ul>
                </div>

                <div data-aos='fade-up'>
                    <p id="heading">company</p>
                    <ul>
                        <li>about us </li>
                        <li>carrers</li>
                        <li>case studies</li>
                        <li>blog</li>
                        <li>contact</li>
                    </ul>
                </div>

                <div data-aos='fade-up'>
                    <p id="heading">stay updated</p>
                    <p>Enter your email and sign up with us</p>
                    <form>
                        <input className='text-black! placeholder-black!' type="email" placeholder='Enter your email' ></input><br />
                        <button className='shadow-lg text-white'>Subscribe</button>
                    </form>

                </div>

            </div>
            <div data-aos='fade-up' id="childtwo">
                <p>@2025 atsify all rights limited</p>
                <div>
                    <ul>
                        <li>privacy policy </li>
                        <li>terms of services</li>
                        <li>cookie policy</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Footer
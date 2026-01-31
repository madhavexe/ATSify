import React from 'react'
import { Phone, Mail, MapPinHouse, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'
import Footer from '../assets/components/Footer'
import Navbar from '../assets/components/Navbar/Navbar'

const ContactUs = () => {
    return (
        <div class="bg-[url('./../public/Resume-BG.svg')]! w-full bg-cover bg-top md:p-10 lg:px-15">
            <Navbar />

            <div class="overflow-x-hidden grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-12 mt-16 md:mb-16">

                <div data-aos='fade-right' class="space-y-8 bg-white border border-slate-200 rounded-2xl shadow-lg pl-10 pt-10">
                    <div>
                        <h1 data-aos='fade-right' class="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h1>
                        <p data-aos='fade-right' class="text-gray-800 leading-relaxed max-w-md">
                            We've got live, friendly people standing by, ready to help you.
                            Whether it's a question about building your CV, getting the most
                            out of our services, or managing your account, we're here to help.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div data-aos='fade-right' class="flex items-center space-x-4">
                            <div class="bg-slate-900 p-3 rounded-lg text-yellow-500">
                                <Phone />
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900">Phone</h4>
                                <p class="text-gray-600 text-sm">+917651234</p>
                            </div>
                        </div>
                        <div data-aos='fade-right' class="flex items-center space-x-4">
                            <div class="bg-slate-900 p-3 rounded-lg text-yellow-500">
                               <Mail />
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900">Email</h4>
                                <p class="text-gray-600 text-sm">sviet12@gmail.com</p>
                            </div>
                        </div>
                        <div data-aos='fade-right' class="flex items-center space-x-4">
                            <div class="bg-slate-900 p-3 rounded-lg text-yellow-500">
                                <MapPinHouse />
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900">Address</h4>
                                <p class="text-gray-600 text-sm">Punjab, banur, patiala</p>
                            </div>
                        </div>
                        <div data-aos='fade-right' class="flex items-center space-x-4">
                            <div class="bg-slate-900 p-3 rounded-lg text-yellow-500">
                                <Instagram />
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900">Instagram</h4>
                                <p class="text-gray-600 text-sm">supeer60</p>
                            </div>
                        </div>
                    </div>

                    <hr class="border-gray-100" />

                    <div data-aos='fade-right' class="flex items-center space-x-6 mb-10 lg:mb-0">
                        <span class="font-bold text-slate-900">Social Media</span>
                        <div class="flex space-x-4 text-slate-900">
                            <a href="#" class="hover:text-blue-600"><Facebook /></a>
                            <a href="#" class="hover:text-blue-400"><Twitter /></a>
                            <a href="#" class="hover:text-red-600"><Youtube /></a>
                        </div>
                    </div>
                </div>

                <div data-aos='fade-left' class="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 md:p-10">
                    <form action="#" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div data-aos='fade-left' class="space-y-2">
                                <label class="block text-sm font-bold text-slate-900">Email</label>
                                <input type="email" placeholder="Email" class="w-full px-4 py-3 rounded-md border-transparent bg-white text-black! placeholder-black!" />
                            </div>
                            <div data-aos='fade-left' class="space-y-2">
                                <label class="block text-sm font-bold text-slate-900">Name</label>
                                <input type="text" placeholder="Name" class="w-full px-4 py-3 rounded-md border-transparent bg-white text-black! placeholder-black!" />
                            </div>
                        </div>
                        <div data-aos='fade-left' class="space-y-2">
                            <label class="block text-sm font-bold text-slate-900">Phone</label>
                            <input type="text" placeholder="Phone" class="w-full px-4 py-3 rounded-md border-transparent bg-white text-black! placeholder-black!" />
                        </div>
                        <div data-aos='fade-left' class="space-y-2">
                            <label class="block text-sm font-bold text-slate-900">Message</label>
                            <textarea rows="4" placeholder="Message" className="w-full px-4 py-3 rounded border border-black bg-white resize-none text-black! placeholder-black!"></textarea>
                        </div>
                        <div data-aos='fade-left'>
                            <button type="submit" class="w-full md:w-auto bg-[#002D4C] text-white px-8 py-3 rounded-md font-bold tracking-wider hover:bg-slate-800 transition">
                            Submit
                        </button>
                        </div>
                    </form>
                </div>
            </div>

            <div data-aos='fade-right' class="w-full h-[250px] md:h-[450px] border border-slate-200 shadow-lg border border-slate-200 md:rounded-2xl overflow-hidden mt-5 md:mt-0 mb-5 md:mb-16">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13706.799140643414!2d76.66520800478631!3d30.53204726836631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssviet!5e0!3m2!1sen!2sin!4v1768307152861!5m2!1sen!2sin"
                    width="800"
                    height="600"
                    className="w-full h-full border-0"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </div>

            <Footer />
        </div>
    )
}

export default ContactUs
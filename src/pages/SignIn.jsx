import React from 'react'
import Navbar from '../assets/components/Navbar/Navbar';
import {Link} from 'react-router-dom'
import HomeIcon from '../assets/components/Navbar/HomeIcon';

const SignIn = () => {
    return (
        <div className="min-h-screen flex flex-col gap-15 items-center bg-[url('./../public/Resume-BG.svg')]! bg-cover p-10">
            <div className='flex justify-between items-center p-3 px-5 bg-amber-50 mx-auto rounded-full'>
               <HomeIcon />
            </div>
            <div className="w-full max-w-[420px] text-center">
                
                <h1 className="text-[28px] sm:text-3xl font-semibold text-gray-700 tracking-tight">
                    Welcome Back
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-500">
                    Log In to Continue Your Job Journey
                </p>
                
                <div className="relative mt-8 rounded-2xl bg-white/60 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] px-6 py-7 sm:px-8 sm:py-8">
                    
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/40" />


                    <form className="relative space-y-5">
                        
                        <div className="text-left">
                            <label className="block text-xs font-medium text-gray-600 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-gray-200 bg-white/80 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                            />
                        </div>


                        
                        <div className="text-left">
                            <label className="block text-xs font-medium text-gray-600 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full rounded-lg border border-gray-200 bg-white/80 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                            />
                        </div>


                        
                        <button
                            type="submit"
                            className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 py-3 text-sm font-medium text-white shadow-[0_10px_25px_-8px_rgba(79,70,229,0.8)] hover:brightness-110 active:scale-[0.98] transition"
                        >
                            Log In
                        </button>
                    </form>
                </div>


                
                <p className="mt-6 text-xs sm:text-sm text-gray-500">
                    Don’t have an account?{' '}
                    <a
                        href="#"
                        className="text-indigo-500 font-medium hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );

}

export default SignIn

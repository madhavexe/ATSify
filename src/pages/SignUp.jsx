
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeIcon from '../assets/components/Navbar/HomeIcon'
import SignIn from './SignIn'

export function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const [showSignIn, setShowSignIn] = useState(false)
  // const localSignIn = localStorage.getItem('signUp')

  const navigate = useNavigate()

useEffect(() => {
  const localSignIn = localStorage.getItem('signUp')
  if (localSignIn) {
    navigate('/SignIn')
  }
}, [navigate])

  const handleSubmit = (e) => {
    if (name && email && password) {
      // console.log(name,email,password)
      e.preventDefault()
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      localStorage.setItem('signUp', email)
      alert('Account created successfully')
      
      navigate('/SignIn')
    }
  }

  return (
        <div div className="flex flex-col gap-15 p-10 items-center bg-[url('https://img.freepik.com/premium-vector/aesthetic-mountain-wallpaper-background-image_584397-109.jpg?w=2000')]! bg-cover min-h-screen justify-center px-4 sm:px-6" >
          <div className="flex justify-between items-center p-3 px-5 bg-amber-50 mx-auto rounded-full">
            <HomeIcon />
          </div>

          <div className="w-full max-w-[420px] text-center">
            <h1 className="text-[28px] sm:text-3xl font-semibold text-gray-700">
              Create Account
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Start your journey to your dream job
            </p>

            <div className="relative mt-8 rounded-2xl  backdrop-blur-2xl bg-transparent shadow px-6 py-7">
              <form className="space-y-5">
                <div className="text-left">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    className="w-full text-black! placeholder-black! rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    className="w-full text-black! placeholder-black! rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    className="w-full text-black! placeholder-black! rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full text-black! placeholder-black! rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full mt-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 py-3 text-sm font-medium text-white hover:brightness-110"
                >
                  Create Account
                </button>
              </form>
            </div>

            <p className="mt-6 text-xs text-gray-500">
              Already have an account?{' '}
              <Link to="/SignIn" className="text-indigo-500 font-medium hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div >
  )
}

export default SignUp

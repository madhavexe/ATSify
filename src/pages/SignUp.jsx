
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeIcon from '../assets/components/Navbar/HomeIcon'
import SignIn from './SignIn'

export function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const [nameCheck, setNameCheck] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [passErr, setPassErr] = useState(false)
  const [passCheck, setPassCheck] = useState(false)

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
    e.preventDefault()

    // if (name && email && password) {
    if (name && email && password && !emailErr && !passErr && !passCheck) {
      // console.log(name,email,password)

      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      localStorage.setItem('signUp', email)
      alert('Account created successfully')

      navigate('/SignIn')
    }
  }

  return (
    <div className="flex flex-col gap-15 p-10 items-center #bg-size-[90%] #bg-top-right #bg-contain bg-[url('https://cdn.dribbble.com/userupload/12556386/file/original-82c74fdc16ede820a4b43e9cb1abe45d.png?resize=1200x900&vertical=center')]! bg-cover  min-h-screen justify-center px-4 sm:px-6" >
      <div className="flex justify-between bg-white items-center p-3 px-3 #bg-transparent #bg-amber-50 mx-auto rounded-full border">
        <HomeIcon />
      </div>

      <div className="bg-transparent! w-full max-w-[420px] text-center">
        <h1 className="text-[28px] sm:text-3xl font-semibold text-gray-700">
          Create Account
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Start your journey to your dream job
        </p>

        <div className="relative mt-8 rounded-4xl bg-transparent bg-white #bg-white/60 #backdrop-blur-xl shadow px-6 py-7">
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
                  // setNameCheck(true)
                  const value = e.target.value
                  if(/[0-9`~!@#$%^&*()_+=?/><.,-]/.test(value)){
                    setNameCheck(false)
                  }else{
                    setNameCheck(true)
                    setName(value)
                  }
                }}
                className="w-full text-black! placeholder-black! rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-400"
              />
              {/* {/[0-9`~!@#$%^&*()_+=?/><.,-]/.test(name) ? setNameCheck(false) : ''} */}
              {/* {/[0-9]/.test(name)? <span className='text-red-500 text-[12px]'>Name can't include any number or symbol</span> :''}
            </div> */}
              {/* {/[0-9`~!@#$%^&*()_+=?/><.,-]/.test(name) ? setName('') : ''} */}
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
                  if (!e.target.value.includes('@')) {
                    setEmailErr(true)
                  } else {
                    setEmailErr(false)
                  }
                }}
                className="w-full text-black! placeholder-black! rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-400"
              />
              {emailErr ? <span className='text-red-500 text-[12px]'>Not a valid email.</span> : ''}
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
                  if (e.target.value.length>8) {
                    setPassErr(true)
                  } else {
                    setPassErr(false)
                  }
                }}
                className="w-full text-black! placeholder-black! rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-400"
              />
              {passErr ? <span className='text-red-500 text-[12px]'>Password must be of 8 characters.</span> : ''}
            </div>

            <div className="text-left">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                value={confirmPass}
                onChange={(e) => {
                  setConfirmPass(e.target.value)
                  if(password!=e.target.value){
                    setPassCheck(true)
                  } else{
                    setPassCheck(false)
                  }
                  
                }}
                type="password"
                placeholder="Confirm your password"
                className="w-full text-black! placeholder-black! rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-400"
              />
              {passCheck ? <span className='text-red-500 text-[12px]'>Passwords doesn't match</span> : ''}
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

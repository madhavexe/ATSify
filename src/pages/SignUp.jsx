// import React, { useContext, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import HomeIcon from '../assets/components/Navbar/HomeIcon';
// import { userDataContext } from '../assets/context/UserArray';

// export function SignUp() {

//   // const [userData, setUserData] = useContext(userDataContext) //ADDED

//   const navigate = useNavigate()

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   })

//   const [errors, setErrors] = useState({})


//   const validateField = (name, value) => {
//     let error = ''

//     switch (name) {
//       case 'name':
//         if (!value.trim()) error = 'Full name is required'
//         break

//       case 'email':
//         if (!value) error = 'Email is required'
//         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
//           error = 'Enter a valid email address'
//         break

//       case 'password':
//         if (!value) error = 'Password is required'
//         else if (value.length < 8)
//           error = 'Password must be at least 8 characters'
//         break

//       case 'confirmPassword':
//         if (!value) error = 'Please confirm your password'
//         else if (value !== formData.password)
//           error = 'Passwords do not match'
//         break

//       default:
//         break
//     }

//     return error
//   }


//   const handleChange = (e) => {
//     const { name, value } = e.target

//     setFormData(prev => ({ ...prev, [name]: value }))

//     setErrors(prev => ({
//       ...prev,
//       [name]: validateField(name, value),
//     }))
//   }

//   const handleBlur = (e) => {
//     const { name, value } = e.target
//     setErrors(prev => ({
//       ...prev,
//       [name]: validateField(name, value),
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     const newErrors = {}
//     Object.keys(formData).forEach((field) => {
//       const error = validateField(field, formData[field])
//       if (error) newErrors[field] = error
//     })

//     setErrors(newErrors)

//     if (Object.keys(newErrors).length === 0) {
//       console.log('Signup successful:', formData)

//       // ✅ Redirect to Sign In page
//       navigate('/SignIn')

//     }
//   }


//   return (
//     <div className="flex flex-col gap-15 p-10 items-center bg-[url('./../public/Resume-BG.svg')]! bg-cover min-h-screen justify-center px-4 sm:px-6">
//       <div className='flex justify-between items-center p-3 px-5 bg-amber-50 mx-auto rounded-full'>
//         <HomeIcon />
//       </div>

//       <div className="w-full max-w-[420px] text-center">
//         <h1 className="text-[28px] sm:text-3xl font-semibold text-gray-700">
//           Create Account
//         </h1>
//         <p className="mt-2 text-sm text-gray-500">
//           Start your journey to your dream job
//         </p>

//         <div className="relative mt-8 rounded-2xl bg-white/60 backdrop-blur-xl shadow px-6 py-7">
//           <form className="space-y-5" onSubmit={handleSubmit} noValidate>


//             <div className="text-left">
//               <label className="block text-xs font-medium text-gray-600 mb-1">
//                 Full Name
//               </label>
//               <input
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 type="text"
//                 placeholder="Enter your name"
//                 className={`w-full text-black! placeholder-black!  rounded-lg border px-4 py-2.5 text-sm focus:ring-2 
//                   ${errors.name ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-indigo-400'}`}
//               />
//               {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
//             </div>


//             <div className="text-left">
//               <label className="block text-xs font-medium text-gray-600 mb-1">
//                 Email Address
//               </label>
//               <input
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 type="email"
//                 placeholder="Enter your email"
//                 className={`w-full text-black! placeholder-black!  rounded-lg border px-4 py-2.5 text-sm focus:ring-2 
//                   ${errors.email ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-indigo-400'}`}
//               />
//               {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
//             </div>


//             <div className="text-left">
//               <label className="block text-xs font-medium text-gray-600 mb-1">
//                 Password
//               </label>
//               <input
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 type="password"
//                 placeholder="Create a password"
//                 className={`w-full text-black! placeholder-black!  rounded-lg border px-4 py-2.5 text-sm focus:ring-2 
//                   ${errors.password ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-indigo-400'}`}
//               />
//               {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
//             </div>


//             <div className="text-left">
//               <label className="block text-xs font-medium text-gray-600 mb-1">
//                 Confirm Password
//               </label>
//               <input
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 type="password"
//                 placeholder="Confirm your password"
//                 className={`w-full text-black! placeholder-black!  rounded-lg border px-4 py-2.5 text-sm focus:ring-2 
//                   ${errors.confirmPassword ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-indigo-400'}`}
//               />
//               {errors.confirmPassword && (
//                 <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>
//               )}
//             </div>

//             <button

//               type="submit"
//               className="w-full mt-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 py-3 text-sm font-medium text-white hover:brightness-110"
//             >
//               Create Account
//             </button>
//           </form>
//         </div>

//         <p className="mt-6 text-xs text-gray-500">
//           Already have an account?{' '}
//           <Link to="/SignIn" className="text-indigo-500 font-medium hover:underline">
//             Log in
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default SignUp

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
        <div className="flex flex-col gap-15 p-10 items-center #bg-size-[90%] bg-top-right bg-contain bg-[url('https://cdn.dribbble.com/userupload/12556386/file/original-82c74fdc16ede820a4b43e9cb1abe45d.png?resize=1200x900&vertical=center')]! #bg-cover min-h-screen justify-center px-4 sm:px-6" >
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

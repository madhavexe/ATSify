import React, { useState } from 'react'
import Navbar from '../assets/components/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom'
import HomeIcon from '../assets/components/Navbar/HomeIcon';

const SignIn = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const localEmail = localStorage.getItem('email')
  const localPassword = localStorage.getItem('password')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email === localEmail && password === localPassword) {
      localStorage.setItem('signUp', email)
      alert('Logged In Successfully')
      navigate('/')
    }
// if(email)
  }

  return (
    <div className="min-h-screen flex flex-col gap-15 items-center bg-top bg-contain  bg-[url('https://cdn.dribbble.com/userupload/12556386/file/original-82c74fdc16ede820a4b43e9cb1abe45d.png?resize=1200x900&vertical=center')]! #bg-cover p-10">
      <div className='flex justify-between border items-center p-3 px-3 bg-white mx-auto rounded-full'>
        <HomeIcon />
      </div>
      <div className="w-full max-w-[420px] text-center">

        <h1 className="text-[28px] sm:text-3xl font-semibold text-gray-700 tracking-tight">
          Welcome
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-500">
          Log In to Continue Your Job Journey
        </p>

        <div className="relative mt-8 rounded-4xl bg-white  #backdrop-blur-xl #shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] px-6 py-7 sm:px-8 sm:py-8">

          <div className="pointer-events-none absolute inset-0 rounded-2xl #ring-1 #ring-white/40" />


          <form onSubmit={handleSubmit} className="relative space-y-5">

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
                className="w-full rounded-lg border border-gray-200 bg-white/80 px-4 py-2.5 text-sm text-black! placeholder-black! focus:outline-none focus:ring-2 focus:ring-indigo-400/60 "
              />
            </div>



            <div className="text-left">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-200 bg-white/80 px-4 py-2.5 text-sm text-black! placeholder-black! focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
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
          <Link to='/SignUp'>
            <a
              href="#"
              className="text-indigo-500 font-medium hover:underline"
            >
              Sign up
            </a>
          </Link>
        </p>
      </div>
    </div>
  );

}

export default SignIn

// import React, { useState } from 'react'
// import Navbar from '../assets/components/Navbar/Navbar'
// import { Link, useNavigate } from 'react-router-dom'
// import HomeIcon from '../assets/components/Navbar/HomeIcon'

// const SignIn = () => {

//   const handleLogIn = () => {
// if()
//   }

//   // const navigate = useNavigate()
//   // const [signUpNavigate, setSignUpNavigate] = useState(false)
//   // const SignUpRedirect = () => {
//   //   setSignUpNavigate(true)
//   //   if (signUpNavigate) {
//   //     navigate('/SignUp')
//   //   }
//   // }

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   })

//   const [errors, setErrors] = useState({})

//   /* ---------------- VALIDATION ---------------- */
//   const validateField = (name, value) => {
//     let error = ''

//     switch (name) {
//       case 'email':
//         if (!value) error = 'Email is required'
//         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
//           error = 'Enter a valid email address'
//         break

//       case 'password':
//         if (!value) error = 'Password is required'
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
//       console.log('Login data:', formData)
//     }
//   }

//   /* ---------------- UI ---------------- */
//   return (
//     <div className="min-h-screen flex flex-col gap-15 items-center bg-[url('./../public/Resume-BG.svg')]! bg-cover p-10">
//       <div className='flex justify-between items-center p-3 px-5 bg-amber-50 mx-auto rounded-full'>
//         <HomeIcon />
//       </div>

//       <div className="w-full max-w-[420px] text-center">
//         <h1 className="text-[28px] sm:text-3xl font-semibold text-gray-700 tracking-tight">
//           Welcome {localStorage.getItem('name')}
//         </h1>
//         <p className="mt-2 text-sm sm:text-base text-gray-500">
//           Log In to Continue Your Job Journey
//         </p>

//         <div className="relative mt-8 rounded-2xl bg-white/60 backdrop-blur-xl shadow px-6 py-7 sm:px-8 sm:py-8">
//           <form className="space-y-5" onSubmit={handleSubmit} noValidate>

//             {/* Email */}
//             <div className="text-left">
//               <label className="block text-xs font-medium text-gray-600 mb-1">
//                 Email Address
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Enter your email"
//                 className={`w-full text-black! placeholder-black! rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2
//                   ${errors.email
//                     ? 'border-red-400 focus:ring-red-300'
//                     : 'border-gray-200 focus:ring-indigo-400/60'
//                   }`}
//               />
//               {errors.email && (
//                 <p className="mt-1 text-xs text-red-500">{errors.email}</p>
//               )}
//             </div>

//             {/* Password */}
//             <div className="text-left">
//               <label className="block text-xs font-medium text-gray-600 mb-1">
//                 Password
//               </label>
//               <input
//                 name="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Enter your password"
//                 className={`w-full text-black! placeholder-black! rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2
//                   ${errors.password
//                     ? 'border-red-400 focus:ring-red-300'
//                     : 'border-gray-200 focus:ring-indigo-400/60'
//                   }`}
//               />
//               {errors.password && (
//                 <p className="mt-1 text-xs text-red-500">{errors.password}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               onClick={handleLogIn}
//               className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 py-3 text-sm font-medium text-white hover:brightness-110 active:scale-[0.98] transition"
//             >
//               Log In
//             </button>
//           </form>
//         </div>

//         <p className="mt-6 text-xs sm:text-sm text-gray-500">
//           Don’t have an account?{' '}
//           <Link
//           // onClick={SignUpRedirect}
//            to="/SignUp" className="text-indigo-500 font-medium hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default SignIn


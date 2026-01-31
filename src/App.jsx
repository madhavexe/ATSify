import React from 'react'
import Hero from './pages/Hero'
import ResumeUpload from './pages/ResumeUpload'
import SignIn from './pages/SignIn'
import Analysis from './pages/Analysis'
import ContactUs from './pages/ContactUs'
import {Route, Routes} from 'react-router-dom'
import SignUp from './pages/SignUp'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
  AOS.init();
}, []);


  return (
    <div>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/ResumeUpload' element={<ResumeUpload />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/Analysis' element={<Analysis />}/>
        <Route path='/ContactUs' element={<ContactUs />}/>
      </Routes>
    </div>
  )
}

export default App
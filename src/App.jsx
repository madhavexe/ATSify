import React from 'react'
import Hero from './pages/Hero'
import ResumeUpload from './pages/ResumeUpload'
import SignIn from './pages/SignIn'
import Analysis from './pages/Analysis'
import ContactUs from './pages/ContactUs'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/ResumeUpload' element={<ResumeUpload />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='/Analysis' element={<Analysis />}/>
        <Route path='/ContactUs' element={<ContactUs />}/>
      </Routes>
    </div>
  )
}

export default App
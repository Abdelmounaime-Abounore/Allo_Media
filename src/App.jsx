import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Athentification from './Component/Register/index'
import Login from './Component/Login/index'
import EmailVerification from './Component/EmailVerification/index'
import Home from './Component/Home'
import ForgetPassword from './Component/ForgetPassword/index'
import ResetPassword from './Component/ResetPassword'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Athentification />} />
        <Route path='/login' element={<Login />} />
        <Route path="/email-verify" element={<EmailVerification />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

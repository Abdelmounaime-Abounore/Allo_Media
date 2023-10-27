import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Athentification from './Component/Auth/index'
import Login from './Component/Login/index'
import EmailVerification from './Component/EmailVerification/index'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Athentification />} />
        <Route path='/login' element={<Login />} />
        <Route path="/client/email-verify" element={<EmailVerification />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

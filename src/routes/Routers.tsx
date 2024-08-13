import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import SignUpHolder from '../components/SignUpHolder'
import LoginHolder from '../components/LoginHolder'
import MainPageHolder from '../components/MainPageHolder'
import PostHolder from '../components/PostHolder'
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpHolder />} />
    <Route path="/login" element={<LoginHolder />} />
    <Route path='/mainpage' element={<MainPageHolder /> } />
    <Route path='/post' element={<PostHolder /> } />
    </Routes>
  )
}

export default Routers
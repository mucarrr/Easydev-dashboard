import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homee from './pages/home/Homee'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homee" element={<Homee />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
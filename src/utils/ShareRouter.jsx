import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function ShareRouter() {
  return (
    <BrowserRouter basename="/share">
          <Routes>
            <Route path="/" element={<h1>Hello</h1>} />
            <Route path="/id" element={<h1>Share is working</h1>} />
          </Routes>
        </BrowserRouter>
  )
}

export default ShareRouter
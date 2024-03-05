import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from './components/About'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Courses from './components/Courses'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="courses" element={<Courses />}>
            <Route path="java" element={<h1>JAVA</h1>}></Route>
            <Route path="mern" element={<h1>mern</h1>}></Route>
            <Route path="python" element={<h1>python</h1>}></Route>
            <Route path="devops" element={<h1>devops</h1>}></Route>
          </Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
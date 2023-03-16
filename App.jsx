import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/home'
import Skills from './components/pages/skills/skills'
import Projects from './components/pages/projects/projects'
import About from './components/pages/aboutme/about'


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Skills' element={<Skills />}/>
          <Route path='/Projects' element={<Projects />}/>
          <Route path='/AboutMe' element={<About />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App

import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HeroSection from './components/heroSection/HeroSection'

import Contact from './components/contact/Contact'
import Project from './components/project/Project'
import About from './components/about/About'

import Layout from './Layout'
import Insperation from './components/insperation/Insperation'
import MultipleCard from './components/multiplecard/MultipleCard'
import HomePage from './components/homepage/HomePage'
import Service from './components/service/Service'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='/hero' element={<HeroSection />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Project />} />
          <Route path='/about' element={<About />} />
          <Route path='/in' element={<Insperation />} />
          <Route path='/project' element={<Project />} />
          <Route path='/mul' element={<MultipleCard />} />
          <Route path='/ser' element={<Service />} />
        </Route>
      </Routes>
    </div >
  )
}

export default App

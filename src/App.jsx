import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Involvement from './components/Involvement'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Involvement />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  )
}

export default App

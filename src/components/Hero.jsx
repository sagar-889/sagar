import React from 'react'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Sagar Kanda</span>
        </h1>
        <p className="hero-subtitle">Web & App Designer | Prompt Engineer | AI & Data Science Student</p>
        <p className="hero-description">
          Passionate learner solving real-world problems with technology. 
          Building practical applications with modern tools and frameworks.
        </p>
        
        <div className="hero-links">
          <a href="https://github.com/kandasagar2006" target="_blank" rel="noopener noreferrer" className="hero-link">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/sagar-kanda" target="_blank" rel="noopener noreferrer" className="hero-link">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:kandasagar2006@gmail.com" className="hero-link">
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>

        <div className="hero-info">
          <div className="info-item">
            <Phone size={16} />
            <span>8897536435</span>
          </div>
          <div className="info-item">
            <MapPin size={16} />
            <span>Sankhavaram, East Godavari - 533446</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

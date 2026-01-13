import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content card">
        <p className="contact-intro">
          I'm always open to discussing new projects, opportunities, or collaborations. 
          Feel free to reach out!
        </p>
        
        <div className="contact-grid">
          <a href="mailto:kandasagar2006@gmail.com" className="contact-item">
            <Mail size={24} />
            <div>
              <h4>Email</h4>
              <p>kandasagar2006@gmail.com</p>
            </div>
          </a>

          <a href="tel:8897536435" className="contact-item">
            <Phone size={24} />
            <div>
              <h4>Phone</h4>
              <p>8897536435</p>
            </div>
          </a>

          <div className="contact-item">
            <MapPin size={24} />
            <div>
              <h4>Location</h4>
              <p>Sankhavaram, East Godavari - 533446</p>
            </div>
          </div>

          <a href="https://github.com/sagar-889" target="_blank" rel="noopener noreferrer" className="contact-item">
            <Github size={24} />
            <div>
              <h4>GitHub</h4>
              <p>kandasagar</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/sagar-kanda" target="_blank" rel="noopener noreferrer" className="contact-item">
            <Linkedin size={24} />
            <div>
              <h4>LinkedIn</h4>
              <p>Sagar Kanda</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

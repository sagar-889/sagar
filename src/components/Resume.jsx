import React from 'react'
import { Download, FileText } from 'lucide-react'
import './Resume.css'

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2 className="section-title">Resume</h2>
      <div className="resume-content card">
        <div className="resume-icon">
          <FileText size={48} />
        </div>
        <h3>Download My Resume</h3>
        <p>Get a comprehensive overview of my skills, experience, and projects.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="/resume.pdf" 
            download="Sagar_Kanda_Resume.pdf"
            className="download-btn"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
            style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)' }}
          >
            <FileText size={20} />
            <span>View Resume</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume

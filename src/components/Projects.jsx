import React from 'react'
import { ExternalLink, Calendar } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Jharkhand Tourism Platform',
      date: 'January 2026',
      description: 'Multi-role tourism management platform with role-based authentication and comprehensive dashboards.',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
      link: 'https://tourismm-two.vercel.app/welcome',
      features: [
        'Role-based authentication (Tourist, Travel Guide, Admin, Government)',
        'Secure JWT authorization',
        'Travel booking and guide verification dashboards',
        'Tourism analytics with charts and reports',
        'Integrated maps, payments, and notifications'
      ]
    },
    {
      title: 'Campus Companion App',
      date: 'December 2025',
      description: 'MERN stack campus management platform with Web3 blockchain integration for secure identity management.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Web3'],
      link: 'https://campuscompanionn.vercel.app/',
      features: [
        'OTP-based authentication',
        'Role-based dashboards for students, faculty, clubs, and admins',
        'Blockchain-based student IDs',
        'NFT certificates and badges',
        'Email and WhatsApp notifications'
      ]
    },
    {
      title: 'SportConnect',
      date: 'August 2025',
      description: 'MERN stack platform enabling players to register and book coaches and turfs across multiple sports.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      link: 'https://sportconnectmern.vercel.app/',
      features: [
        'Coach availability logic',
        'Training video recommendations',
        'Sport-specific assignments',
        'Secure payment integration',
        'Responsive UI with React',
        'RESTful APIs for authentication and booking'
      ]
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="project-date">
                <Calendar size={16} />
                <span>{project.date}</span>
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <ul className="project-features">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                <ExternalLink size={16} />
                <span>View Live Project</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

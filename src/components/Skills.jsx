import React from 'react'
import { Code, Database, Palette, Wrench, Upload, Users } from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Languages',
      skills: ['C', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript']
    },
    {
      icon: <Database size={24} />,
      title: 'Database',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    {
      icon: <Palette size={24} />,
      title: 'Styling',
      skills: ['CSS', 'Tailwind CSS']
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX',
      skills: ['Figma', 'Canva']
    },
    {
      icon: <Wrench size={24} />,
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Windsurf', 'Kiro']
    },
    {
      icon: <Upload size={24} />,
      title: 'Deployment',
      skills: ['Vercel', 'Render']
    },
    {
      icon: <Users size={24} />,
      title: 'Soft Skills',
      skills: ['Team Management', 'Problem Solving', 'Communication', 'Interpersonal Skills']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category card">
            <div className="skill-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

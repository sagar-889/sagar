import React from 'react'
import { Trophy, Users, Award, Heart } from 'lucide-react'
import './Involvement.css'

const Involvement = () => {
  const activities = [
    {
      icon: <Trophy size={24} />,
      title: 'Vedic Vision 2K25 — National Level Hackathon (EOC)',
      description: 'Actively involved in organizing Vedic Vision 2K25, a national-level hackathon with participation from nearly 500 students across multiple institutions.',
      skills: 'Leadership, Communication, Teamwork, Time Management, Problem-solving'
    },
    {
      icon: <Trophy size={24} />,
      title: 'HackOverflow 2K25 — National Level Hackathon (SRKR Coding Club)',
      description: 'Played a key role in participant coordination, technical support, real-time issue resolution, and smooth execution of the event.',
      skills: 'Leadership, Communication, Teamwork, Time Management, Problem-solving'
    },
    {
      icon: <Trophy size={24} />,
      title: 'Uttkarsh 2K25 — National Level Hackathon',
      description: 'Collaborated with peers to conceptualize and develop innovative tech solutions. Applied programming and teamwork skills to real-world challenges.',
      skills: 'Rapid Prototyping, Problem-solving, Teamwork'
    },
    {
      icon: <Users size={24} />,
      title: 'Indian Society For Technical Education (ISTE) — Member',
      description: 'Actively involved in organizing technical workshops, coding contests, hackathons, and seminars. Contributed to hands-on learning activities and project expos.',
      skills: 'Technical Leadership, Event Management, Mentoring'
    },
    {
      icon: <Heart size={24} />,
      title: 'PAIE Cell — Active Member',
      description: 'Contributing to student-centric programs focused on calmness, peace, self-awareness, and personal growth. Actively mentoring and guiding fellow students.',
      skills: 'Mentoring, Guidance, Community Building'
    },
    {
      icon: <Award size={24} />,
      title: 'YES+ Program — Certified Participant',
      description: 'Successfully completed the YES+ program, a structured personal development course involving participants from multiple states.',
      skills: 'Confidence, Communication, Emotional Intelligence, Stress Management, Adaptability'
    }
  ]

  return (
    <section id="involvement" className="involvement">
      <h2 className="section-title">Campus Involvement</h2>
      <div className="involvement-grid">
        {activities.map((activity, index) => (
          <div key={index} className="involvement-card card">
            <div className="involvement-icon">{activity.icon}</div>
            <h3>{activity.title}</h3>
            <p className="involvement-description">{activity.description}</p>
            <div className="involvement-skills">
              <strong>Skills Developed:</strong> {activity.skills}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Involvement

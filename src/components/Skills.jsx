import React from 'react'
import './Skills.css'

function Skills() {
  const skills = [
    { name: 'Swift', category: 'frontend' },
    { name: 'Python', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'PostgreSQL', category: 'backend' },
    { name: 'HTML', category: 'devops' },
    { name: 'CSS', category: 'backend' },
    { name: 'C#, .NET', category: 'devops' },
    
  ]

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">Yetenekler</h2>
        <p className="section-description">Öğrenmeye devam ettiğim teknolojiler.</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

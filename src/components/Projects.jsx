import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Opinor - teknoloji forumu',
      description: 'Çeşitli teknoloji konularında kullanıcıların soru sorup cevaplayabildiği, etkileşimde bulunabildiği dinamik forum platformu.',
      tags: ['HTML', 'PHP', 'XAMPP'],
      links: {
        demo: '#',
        github: 'https://github.com/doaunal/opinor.github.io'
      }
    },
    {
      title: 'Raptiye',
      description: 'Kolay kullanımlı arayüzü ile proje takibi ve görev yönetimi sağlayan ios ve android işletim sistemleri için uygulama.',
      tags: ['SWIFT', 'CSS', 'JS'],
      links: {
        demo: 'https://apps.apple.com/tr/app/raptiye/id6755906553?l=tr',
        github: 'https://github.com/Mobil-Uygulama-IOS/Raptiye-Ios'
      }
    },
    {
      title: 'AI Sayım Uygulaması',
      description: 'Görüntü işleme ve yapay zeka teknolojilerini kullanarak nesne sayımı yapan uygulama.',
      tags: ['SWIFT', 'SUPABASE', 'OPENAI'],
      links: {
        demo: '#',
        github: 'https://github.com/bilgehankarakuss/Domino-s-Inventory'
      }
    }
  ]

  return (
    <section id="projeler" className="projects">
      <div className="container">
        <h2 className="section-title">Seçili Projeler</h2>
        <p className="section-description">Üzerinde çalıştığım bazı güncel projeler.</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-preview">
                <div className="preview-placeholder">
                  <span className="preview-icon">🖥️</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.links.demo} className="project-link">
                    İncele <span className="arrow">↗</span>
                  </a>
                  <a href={project.links.github} className="project-link">
                    Github <span className="arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

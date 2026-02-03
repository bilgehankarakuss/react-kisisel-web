// React kütüphanesini dahil ediyoruz
import React from 'react'
// Bu component'e özel CSS stillerini dahil ediyoruz
import './Projects.css'

// Projects (Projeler) component'i - Portföy projelerini gösterir
function Projects() {
  // Proje verilerini bir dizi içinde saklıyoruz
  // Her proje bir nesne (object) - içinde birden fazla özellik var
  const projects = [
    {
      // String (metin) değerler
      title: 'Opinor - teknoloji forumu',
      description: 'Çeşitli teknoloji konularında kullanıcıların soru sorup cevaplayabildiği, etkileşimde bulunabildiği dinamik forum platformu.',
      // Array (dizi) - birden fazla teknoloji etiketi
      tags: ['HTML', 'PHP', 'XAMPP'],
      // İç içe nesne (nested object) - linkler için
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
    // id="projeler" - Header menüsünden bu bölüme gelinebilir
    <section id="projeler" className="projects">
      <div className="container">
        <h2 className="section-title">Seçili Projeler</h2>
        <p className="section-description">Üzerinde çalıştığım bazı güncel projeler.</p>
        
        {/* Projelerin gösterileceği grid layout */}
        <div className="projects-grid">
          {/* İLK MAP: projects dizisini döngüye alıyoruz */}
          {/* Her proje için bir kart (card) oluşturuyoruz */}
          {projects.map((project, index) => (
            // Her proje kartı
            <div key={index} className="project-card">
              
              {/* Proje önizleme görseli */}
              <div className="project-preview">
                <div className="preview-placeholder">
                  <span className="preview-icon">🖥️</span>
                </div>
              </div>
              
              {/* Proje içeriği */}
              <div className="project-content">
                {/* h3: Üçüncü seviye başlık - alt başlıklar için */}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Teknoloji etiketleri */}
                <div className="project-tags">
                  {/* İKİNCİ MAP: Her projenin tags dizisini döngüye alıyoruz */}
                  {/* idx: inner index - iç döngü için index adını değiştirdik */}
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                
                {/* Proje linkleri */}
                <div className="project-links">
                  {/* Nokta notasyonu ile nesne özelliklerine erişim: project.links.demo */}
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

// Component'i dışarı aktarıyoruz
export default Projects

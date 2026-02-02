import React from 'react'
import './About.css'

function About() {
  return (
    <section id="hakkimda" className="about">
      <div className="container">
        <h2 className="section-title">Hakkımda</h2>
        <div className="about-content">
          <p>
            Ankara Bilim Üniversitesi'nde Yönetim Bilişim Sistemleri bölümü, 3. sınıf öğrencisiyim. Domino's Pizza'da tam zamanlı olarak çalışıyorum.
            Okul ve iş hayatımı dengede tutarak, yazılım geliştirme alanında kendimi sürekli geliştirmeye odaklanıyorum. 
          </p>
          <p>
            Sadece kod yazmakla kalmıyor, ürün geliştirme süreçlerinin her aşamasında kullanıcı 
            deneyimini ön planda tutarak değer yaratmaya odaklanıyorum.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

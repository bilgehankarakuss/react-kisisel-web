// React kütüphanesini dahil ediyoruz
import React from 'react'
// Bu component'e özel CSS stillerini dahil ediyoruz
import './About.css'

// About (Hakkımda) component'i - Kişisel bilgiler bölümü
function About() {
  return (
    // id="hakkimda" - Header'daki menü linklerinin bu bölüme gelmesini sağlar
    <section id="hakkimda" className="about">
      <div className="container">
        {/* h2: İkinci seviye başlık - bölüm başlıkları için kullanılır */}
        <h2 className="section-title">Hakkımda</h2>
        
        {/* İçerik alanı */}
        <div className="about-content">
          {/* Her paragraf ayrı <p> etiketi ile yazılır */}
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

// Component'i dışarı aktarıyoruz
export default About

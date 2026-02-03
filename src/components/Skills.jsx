// React kütüphanesini dahil ediyoruz
import React from 'react'
// Bu component'e özel CSS stillerini dahil ediyoruz
import './Skills.css'

// Skills (Yetenekler) component'i - Teknoloji yetenekleri listesi
function Skills() {
  // const: değişmez değişken tanımlama (JavaScript ES6)
  // skills: bir dizi (array) içinde nesneler (objects) tutuyoruz
  // Her nesne name ve category özelliklerine (properties) sahip
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
        
        {/* Yeteneklerin gösterileceği grid alanı */}
        <div className="skills-grid">
          {/* ÖNEMLI: .map() fonksiyonu - Diziyi döngüye alıp her eleman için JSX oluşturur */}
          {/* skill: dizideki her bir eleman */}
          {/* index: elemanın sıra numarası (0'dan başlar) */}
          {skills.map((skill, index) => (
            // key: React'in listedeki her elemanı tanıması için gerekli benzersiz değer
            // Genellikle index yerine benzersiz bir ID kullanmak daha iyidir
            <div key={index} className="skill-tag">
              {/* {} içinde JavaScript kodu yazabiliriz */}
              {/* skill.name ile nesnenin name özelliğine erişiyoruz */}
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Component'i dışarı aktarıyoruz
export default Skills

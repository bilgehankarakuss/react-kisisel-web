// React kütüphanesini dahil ediyoruz
import React from 'react'
// Bu component'e özel CSS stillerini dahil ediyoruz
import './Hero.css'

// Hero component'i - Ana sayfa banner'ı, genellikle ilk görülen kısım
function Hero() {
  return (
    // <section> etiketi, sayfanın bir bölümünü temsil eder
    <section className="hero">
      <div className="container hero-content">
        
        {/* Profil fotoğrafı bölümü */}
        <div className="hero-image">
          {/* src: resim dosyasının yolu */}
          {/* alt: resim yüklenmezse gösterilecek yazı (erişilebilirlik için önemli) */}
          <img src="/IMG_1626.jpeg" alt="Bilgehan Karakuş" className="profile-image" />
        </div>
        
        {/* Metin içeriği bölümü */}
        <div className="hero-text">
          {/* h1: Ana başlık - sayfada genellikle 1 tane olur */}
          <h1 className="hero-title">Bilgehan Karakuş</h1>
          
          {/* p: Paragraf etiketi */}
          <p className="hero-subtitle">Full Stack Geliştirici Adayı</p>
          <p className="hero-description">
            Modern ui ve kullanıcı deneyimleri sunan, ölçeklenebilir ve sürdürülebilir mobil uygulamaları geliştirmeye odaklanıyorum.
          </p>
          
          {/* Butonlar */}
          <div className="hero-buttons">
            {/* className ile birden fazla CSS class'ı boşlukla ayırarak kullanabiliriz */}
            <a href="#projeler" className="btn btn-primary">Projeleri Gör</a>
            <a href="#iletisim" className="btn btn-secondary">İletişime Geç</a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Component'i dışarı aktarıyoruz
export default Hero

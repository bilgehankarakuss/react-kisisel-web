import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-image">
          <img src="/react-kisisel-web/IMG_1626.jpeg" alt="Bilgehan Karakuş" className="profile-image" />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Bilgehan Karakuş</h1>
          <p className="hero-subtitle">Full Stack Geliştirici Adayı</p>
          <p className="hero-description">
            Modern ui ve kullanıcı deneyimleri sunan, ölçeklenebilir ve sürdürülebilir mobil uygulamaları geliştirmeye odaklanıyorum.
          </p>
          <div className="hero-buttons">
            <a href="#projeler" className="btn btn-primary">Projeleri Gör</a>
            <a href="#iletisim" className="btn btn-secondary">İletişime Geç</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

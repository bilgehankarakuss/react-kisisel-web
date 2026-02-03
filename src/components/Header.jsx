// React kütüphanesini dahil ediyoruz
import React from 'react'
// Bu component'e özel CSS stillerini dahil ediyoruz
import './Header.css'

// Header (Başlık) component'i - Sayfanın en üstündeki menü
function Header() {
  return (
    // HTML'deki <header> etiketi - semantik HTML kullanımı
    // className, React'te CSS class'larını tanımlamak için kullanılır
    <header className="header">
      <div className="container">
        {/* Logo kısmı */}
        <div className="logo">
          <span className="logo-icon">💼</span>
          <span className="logo-text">Bilgehan Karakuş</span>
        </div>
        
        {/* Navigasyon menüsü */}
        <nav className="nav">
          {/* href="#id" ile sayfadaki belirli bölümlere yönlendirme yapıyoruz */}
          <a href="#hakkimda">Hakkımda</a>
          <a href="#projeler">Projeler</a>
          <a href="#iletisim">İletişim</a>
        </nav>
      </div>
    </header>
  )
}

// Component'i dışarı aktarıyoruz
export default Header

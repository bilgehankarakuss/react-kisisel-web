// React kütüphanesini dahil ediyoruz
import React from 'react'
// Bu component'e özel CSS stillerini dahil ediyoruz
import './Contact.css'

// Contact (İletişim) component'i - İletişim bilgileri bölümü
function Contact() {
  return (
    // id="iletisim" - Header menüsünden bu bölüme gelinebilir
    <section id="iletisim" className="contact">
      <div className="container">
        <h2 className="section-title">İletişime Geçin</h2>
        <p className="section-description">
          Bir projeniz mi var veya sadece merhaba demek mi istiyorsunuz?
        </p>
        
        {/* İletişim bilgileri container'ı */}
        <div className="contact-info">
          
          {/* E-posta iletişim kartı */}
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <h3>E-posta</h3>
              {/* mailto: - tıklanınca e-posta uygulamasını açar */}
              <a href="mailto:bilgehankarakus0@gmail.com">bilgehankarakus0@gmail.com</a>
            </div>
          </div>
          
          {/* Telefon iletişim kartı */}
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div className="contact-details">
              <h3>Telefon</h3>
              {/* tel: - mobilde tıklanınca arama yapılır */}
              <a href="tel:+905468677019">0 546 867 70 19</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Component'i dışarı aktarıyoruz
export default Contact

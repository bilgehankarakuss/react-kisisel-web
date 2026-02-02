import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section id="iletisim" className="contact">
      <div className="container">
        <h2 className="section-title">İletişime Geçin</h2>
        <p className="section-description">
          Bir projeniz mi var veya sadece merhaba demek mi istiyorsunuz?
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <h3>E-posta</h3>
              <a href="mailto:bilgehankarakus0@gmail.com">bilgehankarakus0@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div className="contact-details">
              <h3>Telefon</h3>
              <a href="tel:+905468677019">0 546 867 70 19</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

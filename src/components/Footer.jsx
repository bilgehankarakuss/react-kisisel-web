// React kütüphanesini dahil ediyoruz
import React from 'react'
// Bu component'e özel CSS stillerini dahil ediyoruz
import './Footer.css'

// Footer (Alt Bilgi) component'i - Sayfanın en altındaki bölüm
function Footer() {
  return (
    // <footer> - HTML5 semantik etiketi, sayfanın alt bilgi kısmını temsil eder
    <footer className="footer">
      <div className="container footer-content">
        
        {/* Sol taraf - İsim ve telif hakkı */}
        <div className="footer-left">
          <p className="footer-name">Bilgehan Karakuş</p>
          {/* © - telif hakkı sembolü */}
          <p className="footer-copyright">© 2024 Tüm hakları saklıdır.</p>
        </div>
        
        {/* Sağ taraf - Sosyal medya linkleri */}
        <div className="footer-links">
          {/* title: Üzerine gelindiğinde gösterilecek tooltip */}
          <a href="mailto:bilgehan@example.com" className="footer-link" title="E-posta">
            📧
          </a>
          
          {/* target="_blank": Linki yeni sekmede açar */}
          {/* rel="noopener noreferrer": Güvenlik için - yeni sekmenin eski sekmeye erişimini engeller */}
          <a href="https://github.com/bilgehankarakus" target="_blank" rel="noopener noreferrer" className="footer-link" title="GitHub">
            🔗
          </a>
        </div>
      </div>
    </footer>
  )
}

// Component'i dışarı aktarıyoruz
export default Footer

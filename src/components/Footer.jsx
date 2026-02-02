import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <p className="footer-name">Bilgehan Karakuş</p>
          <p className="footer-copyright">© 2024 Tüm hakları saklıdır.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:bilgehan@example.com" className="footer-link" title="E-posta">
            📧
          </a>
          <a href="https://github.com/bilgehankarakus" target="_blank" rel="noopener noreferrer" className="footer-link" title="GitHub">
            🔗
          </a>
          <a href="https://linkedin.com/in/bilgehankarakus" target="_blank" rel="noopener noreferrer" className="footer-link" title="LinkedIn">
            💼
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

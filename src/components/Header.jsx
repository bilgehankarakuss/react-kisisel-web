import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-icon">💼</span>
          <span className="logo-text">Bilgehan Karakuş</span>
        </div>
        <nav className="nav">
          <a href="#hakkimda">Hakkımda</a>
          <a href="#projeler">Projeler</a>
          <a href="#iletisim">İletişim</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

// React kütüphanesini projeye dahil ediyoruz
import React from 'react'

// Tüm bileşenleri (components) import ediyoruz
import Header from './components/Header'    // Üst menü
import Hero from './components/Hero'        // Ana sayfa banner
import About from './components/About'      // Hakkımda bölümü
import Skills from './components/Skills'    // Yetenekler bölümü
import Projects from './components/Projects' // Projeler bölümü
import Contact from './components/Contact'  // İletişim bölümü
import Footer from './components/Footer'    // Alt bilgi

// Ana uygulama fonksiyonu - React'te her component bir fonksiyondur
function App() {
  // return içinde JSX yazıyoruz (JavaScript + HTML benzeri sözdizimi)
  return (
    <div className="App">
      {/* Her bir bileşeni sırayla çağırıyoruz */}
      {/* <ComponentAdi /> şeklinde kullanılır */}
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

// Bu component'i başka dosyalarda kullanabilmek için export ediyoruz
export default App

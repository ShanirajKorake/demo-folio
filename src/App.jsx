import { useState } from 'react'
import './App.css'
import PortfolioHero from './Components/PortfolioHero'
import { Route, Routes } from 'react-router-dom'
import VerificationAtOikas from './Pages/VerificationAtOikas'
import OikasApp from './OikasPharma/OikasApp'
import Home from './OikasPharma/pages/Home'
import AboutUs from './OikasPharma/pages/AboutUs'
import Services from './OikasPharma/pages/Services'
import Products from './OikasPharma/pages/Products'
import Contact from './OikasPharma/pages/Contact'
import ScrollToTop from './Components/ScrollToTop'
import FolioHome from './Pages/FolioHome'
function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<FolioHome />} />

        <Route path="/oikasPharma" element={<OikasApp />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

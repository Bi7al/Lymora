import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import Home from "./Pages/Home"
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'
import Services from "./Pages/Services"
import ScrollToHash from "./Components/ScrollController"
import QuoteForm from "./Pages/Quote"
import ServiceTemplate from "./Pages/Services_2"
import PortfolioGrid from "./Components/PortfolioSection"
import PortfolioPage from "./Pages/Portfolio"

function App() {


  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/quote" element={<QuoteForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:index" element={<ServiceTemplate />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./styles.css";
import Home from './pages/home/Home'
import Header from './components/Header'
import ContactUs from './pages/ContactUs/ContactUs'
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import ServicesDetail from './pages/Services/ServicesDetail'
import Team from './pages/Team/Team';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Terms from './pages/Legal/Terms';
import Careers from './pages/Careers/Careers';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesDetail />} />
        <Route path="/services/:id" element={<ServicesDetail />} />
        <Route path="/team" element={<Team />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
   
    
  )
}

export default App

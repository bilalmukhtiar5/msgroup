import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import "./styles.css";
import Header from './components/Header'
import ContactUs from './pages/ContactUs/ContactUs'

const App = () => {
  return (
    <>
    <Header/>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    </>
   
    
  )
}

export default App

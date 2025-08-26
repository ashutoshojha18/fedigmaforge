import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import WebDevelopment from './pages/services/WebDevelopment';
import MobileApp from './pages/services/MobileApp';
import DigitalMarketing from './pages/services/DigitalMarketing';
import SchoolManagement from './pages/services/SchoolManagement';
import OnlinePresence from './pages/services/OnlinePresence';
import CustomSolutions from './pages/services/CustomSolutions';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import BlogCMS from './components/BlogCMS';
import './styles/index.css';

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-app" element={<MobileApp />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/school-management" element={<SchoolManagement />} />
            <Route path="/services/online-presence" element={<OnlinePresence />} />
            <Route path="/services/custom-solutions" element={<CustomSolutions />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;
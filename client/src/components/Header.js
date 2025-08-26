import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="nav container">
        <button onClick={handleLogoClick} className="logo logo-btn">Fedigma Forge</button>
        
        <ul className={`nav-menu ₹{isMenuOpen ? 'active' : ''}`}>
          <li><button className="nav-link" onClick={() => handleNavClick('/')}>Home</button></li>
          <li><button className="nav-link" onClick={() => handleNavClick('/about')}>About</button></li>
          <li><button className="nav-link" onClick={() => handleNavClick('/services')}>Services</button></li>
          <li><button className="nav-link" onClick={() => handleNavClick('/blog')}>Blog</button></li>
          <li><button className="nav-link" onClick={() => handleNavClick('/contact')}>Contact</button></li>
        </ul>
        
        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
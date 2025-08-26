import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Fedigma Forge</h3>
            <p>
              Innovating Education, Empowering Growth. We are committed to 
              delivering exceptional digital solutions that transform businesses 
              and educational institutions.
            </p>
            <div className="social-links">
              <a 
                href="https://facebook.com/fedigmaforge" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://twitter.com/fedigmaforge" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://linkedin.com/company/fedigma-forge" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://instagram.com/fedigmaforge" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><button onClick={() => handleNavClick('/services/web-development')}>Web Development</button></li>
              <li><button onClick={() => handleNavClick('/services/mobile-app')}>Mobile App Development</button></li>
              <li><button onClick={() => handleNavClick('/services/digital-marketing')}>Digital Marketing</button></li>
              <li><button onClick={() => handleNavClick('/services/school-management')}>School Management System</button></li>
              <li><button onClick={() => handleNavClick('/services/online-presence')}>Online Presence Management</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><button onClick={() => handleNavClick('/')}>Home</button></li>
              <li><button onClick={() => handleNavClick('/about')}>About</button></li>
              <li><button onClick={() => handleNavClick('/services')}>Services</button></li>
              <li><button onClick={() => handleNavClick('/blog')}>Blog</button></li>
              <li><button onClick={() => handleNavClick('/contact')}>Contact</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>
                📧 <a href="mailto:info@fedigmaforge.com">info@fedigmaforge.com</a>
              </p>
              <p>
                📞 <a href="tel:+917984504286">+91 79845 04286</a>, <a href="tel:+919599300796">9599300796</a>
              </p>
              <p>
                📍 <a href="https://maps.google.com/?q=D+60/61+Sewak+Park,+Dwarka,+New+Delhi,+India" target="_blank" rel="noopener noreferrer">D 60/61 Sewak Park, Dwarka, New Delhi, India</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Fedigma Forge Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
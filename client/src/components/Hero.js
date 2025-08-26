import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Innovating Education, Empowering Growth';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-₹{i}`}></div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-tagline"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tagline-text">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Transform Your Digital Vision Into Reality
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            We are a leading technology company specializing in web development, 
            mobile applications, and digital solutions that transform businesses 
            and educational institutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link to="/services" className="btn">Our Services</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
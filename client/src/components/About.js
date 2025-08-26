import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Fedigma Forge
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Transforming ideas into digital reality with cutting-edge technology and innovative solutions
        </motion.p>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Who We Are</h3>
            <p>
              Fedigma Forge is a dynamic technology company dedicated to providing 
              comprehensive digital solutions. We specialize in web development, 
              mobile applications, digital marketing, and educational technology.
            </p>
            <p>
              Our team of experienced developers and designers work tirelessly to 
              deliver high-quality, scalable solutions that meet the unique needs 
              of our clients across various industries.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <i>✓</i>
                <span>Expert Development Team</span>
              </div>
              <div className="feature-item">
                <i>✓</i>
                <span>Cutting-edge Technology</span>
              </div>
              <div className="feature-item">
                <i>✓</i>
                <span>24/7 Support</span>
              </div>
              <div className="feature-item">
                <i>✓</i>
                <span>Scalable Solutions</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="tech-illustration">
              <div className="circuit-board">
                <div className="circuit-line line-1"></div>
                <div className="circuit-line line-2"></div>
                <div className="circuit-line line-3"></div>
                <div className="circuit-node node-1"></div>
                <div className="circuit-node node-2"></div>
                <div className="circuit-node node-3"></div>
                <div className="tech-icon">⚡</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
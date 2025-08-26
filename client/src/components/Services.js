import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaBullhorn, FaSchool, FaGlobe, FaCogs } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and responsive design.',
      link: '/services/web-development'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      link: '/services/mobile-app'
    },
    {
      icon: <FaBullhorn />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and reach.',
      link: '/services/digital-marketing'
    },
    {
      icon: <FaSchool />,
      title: 'School Management System',
      description: 'Complete educational management solutions for schools and educational institutions.',
      link: '/services/school-management'
    },
    {
      icon: <FaGlobe />,
      title: 'Online Presence Management',
      description: 'Build and maintain a strong digital presence across all platforms and channels.',
      link: '/services/online-presence'
    },
    {
      icon: <FaCogs />,
      title: 'Custom Solutions',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      link: '/services/custom-solutions'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive digital solutions tailored to your business needs
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link} 
              className="service-card"
              style={{animationDelay: `₹{index * 0.1}s`}}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-arrow">→</div>
            </Link>
          ))}
        </div>
        
        <div className="services-cta">
          <Link to="/blog" className="btn">View Our Blog</Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
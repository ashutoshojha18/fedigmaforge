import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A complete online shopping solution with payment gateway integration and inventory management.',
      icon: '🛒'
    },
    {
      title: 'School Management System',
      description: 'Comprehensive educational platform for student management, fee collection, and parent communication.',
      icon: '🎓'
    },
    {
      title: 'Restaurant Mobile App',
      description: 'Food ordering and delivery app with real-time tracking and payment integration.',
      icon: '🍕'
    },
    {
      title: 'Corporate Website',
      description: 'Professional business website with CMS, SEO optimization, and responsive design.',
      icon: '🏢'
    },
    {
      title: 'Healthcare Portal',
      description: 'Patient management system with appointment booking and medical records management.',
      icon: '🏥'
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and management system with advanced search and filtering options.',
      icon: '🏠'
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Showcasing our successful projects and digital solutions
        </p>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                {project.icon}
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
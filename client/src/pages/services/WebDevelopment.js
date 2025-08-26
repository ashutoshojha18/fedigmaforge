import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCheck } from 'react-icons/fa';
import QuoteModal from '../../components/QuoteModal';

const WebDevelopment = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      name: 'Basic',
      price: '₹25,000',
      features: [
        'Responsive Design',
        'Up to 5 Pages',
        'Contact Form',
        'Basic SEO',
        '1 Month Support'
      ]
    },
    {
      name: 'Advanced',
      price: '₹50,000',
      popular: true,
      features: [
        'Everything in Basic',
        'Up to 15 Pages',
        'CMS Integration',
        'Advanced SEO',
        'E-commerce Ready',
        '3 Months Support'
      ]
    },
    {
      name: 'Premium',
      price: '₹1,00,000',
      features: [
        'Everything in Advanced',
        'Unlimited Pages',
        'Custom Features',
        'Performance Optimization',
        'Analytics Integration',
        '6 Months Support'
      ]
    }
  ];

  const openModal = (planName) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  return (
    <div style={{paddingTop: '80px'}}>
      <section className="service-detail">
        <div className="container">
          <motion.div
            className="service-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaCode className="service-hero-icon" />
            <h1>Web Development Services</h1>
            <p>
              Create powerful, responsive websites that drive business growth and engage your audience. 
              Our expert team builds modern web applications using cutting-edge technologies and best practices.
            </p>
          </motion.div>

          <div className="pricing-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Choose Your Plan
            </motion.h2>
            
            <div className="pricing-grid">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`pricing-card ₹{plan.popular ? 'popular' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {plan.popular && <div className="popular-badge">Most Popular</div>}
                  <h3>{plan.name}</h3>
                  <div className="price">{plan.price}</div>
                  <ul className="features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheck className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="btn"
                    onClick={() => openModal(plan.name)}
                  >
                    Get Quote
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <QuoteModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName={`Web Development - ₹{selectedPlan} Plan`}
      />
    </div>
  );
};

export default WebDevelopment;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSchool, FaCheck } from 'react-icons/fa';
import QuoteModal from '../../components/QuoteModal';

const SchoolManagement = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      name: 'Basic',
      price: '₹75,000',
      features: [
        'Student Management',
        'Teacher Portal',
        'Basic Attendance System',
        'Grade Management',
        '3 Months Support'
      ]
    },
    {
      name: 'Advanced',
      price: '₹1,50,000',
      popular: true,
      features: [
        'Everything in Basic',
        'Parent Portal',
        'Fee Management',
        'SMS Notifications',
        'Mobile App',
        '6 Months Support'
      ]
    },
    {
      name: 'Premium',
      price: '₹3,00,000',
      features: [
        'Everything in Advanced',
        'Online Classes Integration',
        'Library Management',
        'Transport Management',
        'Advanced Analytics',
        '12 Months Support'
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
            <FaSchool className="service-hero-icon" />
            <h1>School Management System</h1>
            <p>
              Comprehensive educational management solutions for schools and institutions. 
              Streamline operations with our integrated platform for students, teachers, and parents.
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
        serviceName={`School Management System - ₹{selectedPlan} Plan`}
      />
    </div>
  );
};

export default SchoolManagement;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaCheck } from 'react-icons/fa';
import QuoteModal from '../../components/QuoteModal';

const CustomSolutions = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      name: 'Basic',
      price: '₹1,25,000',
      features: [
        'Requirements Analysis',
        'Custom Development',
        'Basic Testing',
        'Documentation',
        '2 Months Support'
      ]
    },
    {
      name: 'Advanced',
      price: '₹2,50,000',
      popular: true,
      features: [
        'Everything in Basic',
        'Advanced Architecture',
        'Integration Services',
        'Comprehensive Testing',
        'Training Sessions',
        '6 Months Support'
      ]
    },
    {
      name: 'Premium',
      price: '₹5,00,000',
      features: [
        'Everything in Advanced',
        'Enterprise Architecture',
        'Scalability Planning',
        'Performance Optimization',
        'Ongoing Maintenance',
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
            <FaCogs className="service-hero-icon" />
            <h1>Custom Solutions</h1>
            <p>
              Tailored software solutions designed specifically for your business requirements. 
              We create unique applications that solve your specific challenges and drive growth.
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
        serviceName={`Custom Solutions - ₹{selectedPlan} Plan`}
      />
    </div>
  );
};

export default CustomSolutions;
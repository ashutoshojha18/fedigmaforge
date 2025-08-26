import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaCheck } from 'react-icons/fa';
import QuoteModal from '../../components/QuoteModal';

const MobileApp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      name: 'Basic',
      price: '₹50,000',
      features: [
        'Single Platform (iOS or Android)',
        'Up to 5 Screens',
        'Basic UI/UX Design',
        'App Store Submission',
        '1 Month Support'
      ]
    },
    {
      name: 'Advanced',
      price: '₹1,25,000',
      popular: true,
      features: [
        'Cross-Platform (iOS & Android)',
        'Up to 15 Screens',
        'Custom UI/UX Design',
        'Push Notifications',
        'API Integration',
        '3 Months Support'
      ]
    },
    {
      name: 'Premium',
      price: '₹2,50,000',
      features: [
        'Everything in Advanced',
        'Unlimited Screens',
        'Advanced Features',
        'Real-time Chat',
        'Payment Gateway',
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
            <FaMobile className="service-hero-icon" />
            <h1>Mobile App Development</h1>
            <p>
              Build native and cross-platform mobile applications that deliver exceptional user experiences. 
              Our expert team creates high-performance apps for iOS and Android platforms.
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
        serviceName={`Mobile App Development - ₹{selectedPlan} Plan`}
      />
    </div>
  );
};

export default MobileApp;
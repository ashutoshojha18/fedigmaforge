import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaCheck } from 'react-icons/fa';
import QuoteModal from '../../components/QuoteModal';

const OnlinePresence = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      name: 'Basic',
      price: '₹10,000/month',
      features: [
        'Social Media Setup',
        'Basic Brand Guidelines',
        'Content Calendar',
        'Monthly Reports',
        'Email Support'
      ]
    },
    {
      name: 'Advanced',
      price: '₹25,000/month',
      popular: true,
      features: [
        'Everything in Basic',
        'Multi-Platform Management',
        'Brand Strategy Development',
        'Reputation Monitoring',
        'Weekly Reports',
        'Phone Support'
      ]
    },
    {
      name: 'Premium',
      price: '₹50,000/month',
      features: [
        'Everything in Advanced',
        'Complete Brand Overhaul',
        'Crisis Management',
        'Influencer Outreach',
        'Real-time Monitoring',
        'Dedicated Manager'
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
            <FaGlobe className="service-hero-icon" />
            <h1>Online Presence Management</h1>
            <p>
              Build and maintain a strong digital presence across all platforms and channels. 
              We help you create a consistent brand image that resonates with your audience.
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
        serviceName={`Online Presence Management - ₹{selectedPlan} Plan`}
      />
    </div>
  );
};

export default OnlinePresence;
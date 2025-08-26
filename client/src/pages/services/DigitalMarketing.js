import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaCheck } from 'react-icons/fa';
import QuoteModal from '../../components/QuoteModal';

const DigitalMarketing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      name: 'Basic',
      price: '₹15,000/month',
      features: [
        'Social Media Management',
        'Basic SEO Optimization',
        'Content Creation (5 posts/week)',
        'Monthly Analytics Report',
        'Email Support'
      ]
    },
    {
      name: 'Advanced',
      price: '₹35,000/month',
      popular: true,
      features: [
        'Everything in Basic',
        'Google Ads Management',
        'Advanced SEO Strategy',
        'Content Creation (10 posts/week)',
        'Weekly Analytics Reports',
        'Phone Support'
      ]
    },
    {
      name: 'Premium',
      price: '₹75,000/month',
      features: [
        'Everything in Advanced',
        'Full Digital Strategy',
        'Influencer Partnerships',
        'Daily Content Creation',
        'Real-time Analytics',
        'Dedicated Account Manager'
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
            <FaBullhorn className="service-hero-icon" />
            <h1>Digital Marketing Services</h1>
            <p>
              Boost your online presence with comprehensive digital marketing strategies. 
              From SEO to social media management, we help you reach and engage your target audience effectively.
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
        serviceName={`Digital Marketing - ₹{selectedPlan} Plan`}
      />
    </div>
  );
};

export default DigitalMarketing;
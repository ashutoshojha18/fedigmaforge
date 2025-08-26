import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuoteModal = ({ isOpen, onClose, serviceName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request:', { ...formData, service: serviceName });
    alert('Quote request submitted successfully!');
    onClose();
    setFormData({ name: '', email: '', requirements: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Get a Quote for {serviceName}</h3>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>
            
            <form onSubmit={handleSubmit} className="quote-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Requirements</label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn">Submit Quote Request</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
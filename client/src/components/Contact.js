import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to start your project? Contact us today for a free consultation
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              We're here to help you transform your ideas into digital reality.
              Reach out to us through any of the following channels.
            </p>

            <div className="contact-item">
              <i>📧</i>
              <div>
                <h4>Email</h4>
                <p>info@fedigmaforge.com</p>
              </div>
            </div>

            <div className="contact-item">
              <i>📞</i>
              <div>
                <h4>Phone</h4>
                <p>+91 7984504286, +91 9599300796</p>
              </div>
            </div>

            <div className="contact-item">
              <i>📍</i>
              <div>
                <h4>Address</h4>
                <p>D 60/61 Sewak Park, Dwarka, New Delhi, India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Raghav Sharma",
      position: "Business Owner",
      text: "Fedigma Forge delivered an exceptional website that exceeded our expectations. Their attention to detail and professional approach made the entire process smooth and enjoyable.",
      avatar: "RS"
    },
    {
      name: "Priya Patel",
      position: "School Principal",
      text: "The school management system developed by Fedigma Forge has revolutionized our administrative processes. It's user-friendly and has significantly improved our efficiency.",
      avatar: "PP"
    },
    {
      name: "Amit Kumar",
      position: "Restaurant Owner",
      text: "Our mobile app has increased our orders by 300%. The team at Fedigma Forge understood our requirements perfectly and delivered a fantastic solution.",
      avatar: "AK"
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Real feedback from our satisfied clients
        </p>
        
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <p className="testimonial-text">
                "{testimonial.text}"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.avatar}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
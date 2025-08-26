import React, { useState } from 'react';

const Personalities = () => {
  const [currentPersonality, setCurrentPersonality] = useState(0);

  const personalities = [
    {
      avatar: "SP",
      quote: "Technology is best when it brings people together.",
      name: "Sundar Pichai",
      title: "CEO, Google"
    },
    {
      avatar: "TC",
      quote: "Technology alone is not enough. It's technology married with the humanities that yields results that make our hearts sing.",
      name: "Tim Cook",
      title: "CEO, Apple"
    },
    {
      avatar: "SN",
      quote: "Our mission is to empower every person and every organization on the planet to achieve more.",
      name: "Satya Nadella",
      title: "CEO, Microsoft"
    },
    {
      avatar: "EM",
      quote: "The first step is to establish that something is possible; then probability will occur.",
      name: "Elon Musk",
      title: "CEO, Tesla & SpaceX"
    },
    {
      avatar: "JB",
      quote: "If you double the number of experiments you do per year, you're going to double your inventiveness.",
      name: "Jeff Bezos",
      title: "Founder, Amazon"
    },
    {
      avatar: "MB",
      quote: "The business of business is improving the state of the world.",
      name: "Marc Benioff",
      title: "CEO, Salesforce"
    }
  ];

  const nextPersonality = () => {
    setCurrentPersonality((prev) => (prev + 1) % personalities.length);
  };

  const prevPersonality = () => {
    setCurrentPersonality((prev) => (prev - 1 + personalities.length) % personalities.length);
  };

  return (
    <section className="personalities">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Endorsed by Industry Leaders</h2>
          <p className="section-subtitle">Wisdom from the world's tech visionaries inspiring our mission</p>
        </div>
        <div className="personalities-slider">
          <div className="personalities-track" style={{ transform: `translateX(-₹{currentPersonality * 100}%)` }}>
            {personalities.map((personality, index) => (
              <div key={index} className="personality-card">
                <div className="personality-avatar">{personality.avatar}</div>
                <div className="personality-content">
                  <blockquote>"{personality.quote}"</blockquote>
                  <cite>
                    <strong>{personality.name}</strong>
                    <span>{personality.title}</span>
                  </cite>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <button className="prev-btn" onClick={prevPersonality}>‹</button>
            <button className="next-btn" onClick={nextPersonality}>›</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personalities;
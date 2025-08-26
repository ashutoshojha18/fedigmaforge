import React, { useEffect, useState } from 'react';

const StatsSlider = () => {
  const [stats, setStats] = useState([
    { icon: "📅", number: 0, target: 3, suffix: "+", label: "Years of Experience" },
    { icon: "✅", number: 0, target: 47, suffix: "+", label: "Projects Completed" },
    { icon: "😊", number: 0, target: 43, suffix: "+", label: "Happy Clients" },
    { icon: "🌍", number: 0, target: 3, suffix: "+", label: "Countries Served" },
    { icon: "🕐", number: 24, target: 24, suffix: "/7", label: "Support Available" },
    { icon: "⭐", number: 0, target: 95, suffix: "%", label: "Client Satisfaction" }
  ]);

  useEffect(() => {
    const animateNumbers = () => {
      setStats(prevStats => 
        prevStats.map(stat => {
          if (stat.number < stat.target && stat.target !== 24) {
            return { ...stat, number: Math.min(stat.number + 1, stat.target) };
          }
          return stat;
        })
      );
    };

    const interval = setInterval(animateNumbers, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-slider">
      <div className="container">
        <div className="stats-carousel">
          <div className="stats-track">
            {stats.concat(stats).map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-suffix">{stat.suffix}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSlider;
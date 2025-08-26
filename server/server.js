const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Fedigma Forge Server is running!', status: 'OK' });
});

app.get('/api/health', (req, res) => {
  res.json({ message: 'Fedigma Forge API is running!' });
});

app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      name: 'Web Development',
      description: 'Custom websites and web applications',
      icon: '🌐'
    },
    {
      id: 2,
      name: 'App Development',
      description: 'Mobile applications for iOS and Android',
      icon: '📱'
    },
    {
      id: 3,
      name: 'Digital Marketing',
      description: 'SEO, social media, and online marketing',
      icon: '📈'
    }
  ];
  res.json(services);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically save to database or send email
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message! We will get back to you soon.' 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ₹{PORT}`);
});
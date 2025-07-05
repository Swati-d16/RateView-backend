
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample SEO headlines for random selection
const sampleHeadlines = [
  "Best Local Business in Your Area - Trusted by Thousands",
  "Award-Winning Service You Can Count On",
  "Your Neighborhood's #1 Choice for Quality and Value",
  "Exceptional Service, Unbeatable Prices - Visit Us Today",
  "Locally Owned, Community Focused - Serving You Since Day One",
  "Experience the Difference - Where Quality Meets Excellence",
  "Your Local Experts - Professional Service, Personal Touch",
  "Trusted by the Community - Five-Star Service Guaranteed",
  "Where Great Service Meets Great Value",
  "Your Premier Local Destination for Quality Solutions",
  "Dedicated to Excellence - Your Success is Our Priority",
  "Local Leaders in Customer Satisfaction and Quality",
];

// Helper function to generate random rating between 3.5 and 5.0
const generateRandomRating = () => {
  return Number((Math.random() * (5.0 - 3.5) + 3.5).toFixed(1));
};

// Helper function to generate random review count
const generateRandomReviews = () => {
  return Math.floor(Math.random() * (500 - 25) + 25);
};

// Helper function to get random headline
const getRandomHeadline = () => {
  return sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)];
};

// POST /business-data endpoint
app.post('/business-data', (req, res) => {
  try {
    const { name, location } = req.body;
    
    // Validate input
    if (!name || !location) {
      return res.status(400).json({
        error: 'Business name and location are required'
      });
    }

    // Generate simulated business data
    const businessData = {
      rating: generateRandomRating(),
      reviews: generateRandomReviews(),
      headline: getRandomHeadline(),
      businessName: name,
      businessLocation: location,
      timestamp: new Date().toISOString()
    };

    console.log(`Generated data for: ${name} in ${location}`);
    res.json(businessData);
    
  } catch (error) {
    console.error('Error in /business-data:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// GET /regenerate-headline endpoint
app.get('/regenerate-headline', (req, res) => {
  try {
    const { name, location } = req.query;
    
    // Generate new headline
    const newHeadline = getRandomHeadline();
    
    console.log(`Generated new headline for: ${name} in ${location}`);
    res.json({
      headline: newHeadline,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error in /regenerate-headline:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Local Business Dashboard API is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Something went wrong!'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Local Business Dashboard API running on http://localhost:${PORT}`);
  console.log(`📊 Available endpoints:`);
  console.log(`   POST /business-data - Get business analytics`);
  console.log(`   GET /regenerate-headline - Generate new SEO headline`);
  console.log(`   GET /health - Health check`);
});

module.exports = app;

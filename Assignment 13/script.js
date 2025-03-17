const express = require('express');
const redis = require('redis');
const cors = require('cors');

const app = express();
app.use(cors());

// Create a Redis client
const client = redis.createClient();

// Handle Redis connection events
client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

// Initialize the visitor count if it doesn't exist
client.set('visitorCount', 0, (err) => {
  if (err) console.error('Error initializing visitor count:', err);
});

// Endpoint to get the visitor count
app.get('/visitor-count', (req, res) => {
  client.get('visitorCount', (err, count) => {
    if (err) {
      console.error('Error fetching visitor count:', err);
      return res.status(500).send('Error fetching visitor count');
    }
    res.json({ count: parseInt(count) });
  });
});

// Endpoint to increment the visitor count
app.post('/increment-visitor-count', (req, res) => {
  client.incr('visitorCount', (err, count) => {
    if (err) {
      console.error('Error incrementing visitor count:', err);
      return res.status(500).send('Error incrementing visitor count');
    }
    res.json({ count: parseInt(count) });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

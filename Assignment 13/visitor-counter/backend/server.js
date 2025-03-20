const express = require('express');
const { createClient } = require('redis');

const app = express();

// Create a Redis client with the new v4 API
const redisClient = createClient({
    socket: {
        host: 'redis', // Redis service name in Docker Compose
        port: 6379
    }
});

// Connect to Redis
redisClient.connect().then(() => {
    console.log('Connected to Redis');
}).catch((err) => {
    console.error('Redis connection error:', err);
});

const PORT = 4000;

// Endpoint to increment visitor count
app.get('/api/visitors', async (req, res) => {
    try {
        const visitorCount = await redisClient.incr('visitor_count');
        res.json({ count: visitorCount });
    } catch (error) {
        console.error("Error incrementing visitor count:", error);
        res.status(500).json({ error: 'Failed to get visitor count' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

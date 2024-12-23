const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize app
const app = express();
app.use(express.json());
app.use(cors());

// Test API route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Import routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

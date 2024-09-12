const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/startup-mentor', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));

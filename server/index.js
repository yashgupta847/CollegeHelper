const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Separate route handlers for MyQuestion and myAnswer
const questionRoutes = require('./routes/MyQuestion');  // Route for submitting questions
const answerRoutes = require('./routes/myAnswer');  // Route for submitting answers to questions

// Routes for handling questions and answers
app.use('/api', questionRoutes);

// Basic health check route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');

    // Use the port provided by Render or fallback to 5000
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.log(err));

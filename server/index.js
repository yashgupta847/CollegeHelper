const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
// console.log("ENV SECRET KEY:", process.env.ADMIN_SECRET);

const app = express();
app.use(cors());
app.use(express.json());

// Separate route handlers for MyQuestion and myAnswers
const questionRoutes = require('./routes/MyQuestion');  // Route for submitting questions
const answerRoutes = require('./routes/myAnswer');  // Route for submitting answers to questions

// Routes for handling questions and answers
app.use('/api', questionRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.log(err));

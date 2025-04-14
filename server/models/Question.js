const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,  // Answer will be added later
    default: null,
  },
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
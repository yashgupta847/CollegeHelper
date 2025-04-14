const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// POST: Create a new question
router.post('/', async (req, res) => {
  try {
    const newQuestion = new Question({
      questionText: req.body.questionText,
      answer: req.body.answer,
    });

    const savedQuestion = await newQuestion.save();
    res.json(savedQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Get a specific question by ID
router.get('/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT: Update a question by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(updatedQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE: Delete a question by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json({ message: 'Question deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

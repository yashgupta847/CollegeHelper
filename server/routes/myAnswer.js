// const express = require('express');
// const router = express.Router();
// const Question = require('../models/Question');  // Import the Question model

// // Route to save an answer to the question
// router.post('/', async (req, res) => {
//   const { questionId, answer } = req.body;

//   if (!questionId || !answer) {
//     return res.status(400).json({ message: 'Missing questionId or answer' });
//   }

//   try {
//     // Find the question by its ID
//     const question = await Question.findById(questionId);

//     if (!question) {
//       return res.status(404).json({ message: 'Question not found' });
//     }

//     // Update the question with the answer
//     question.answer = answer;

//     // Save the updated question with the answer
//     await question.save();
//     res.status(200).json({ message: 'Answer submitted successfully!', question });
//   } catch (error) {
//     console.error('Error saving answer:', error);
//     res.status(500).json({ message: 'Error saving answer', error });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// POST /api/MyQuestion
router.post("/MyQuestion", async (req, res) => {
  const { name, email, question, secretKey } = req.body;
  // console.log("🔑 Received Secret Key:", secretKey);
  // console.log("🔒 Expected Secret Key:", process.env.ADMIN_SECRET);
  if (!name || !email || !question) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    const newQuestion = new Question({ name, email, question });
    await newQuestion.save();
    res
      .status(201)
      .json({ message: "Question submitted successfully!", newQuestion });
  } catch (error) {
    res.status(500).json({ message: "Error saving question", error });
  }
});

// POST /api/myAnswers
router.post("/myAnswers", async (req, res) => {
  const { questionId, answer, secretKey } = req.body;
  // Debug logs
  console.log("🔑 Received Secret Key:", secretKey);
  console.log("🔒 Expected Secret Key:", process.env.ADMIN_SECRET);
  try {
    const question = await Question.findById(questionId);
    if (secretKey !== process.env.ADMIN_SECRET) {
      return res.status(403).json({ message: "Not authorized to answer" });
    }
    if (!question)
      return res.status(404).json({ message: "Question not found" });

    question.answer = answer;
    await question.save();

    res
      .status(200)
      .json({ message: "Answer submitted successfully!", question });
  } catch (error) {
    res.status(500).json({ message: "Error saving answer", error });
  }
});

// Route to get all questions with answers
router.get("/all", async (req, res) => {
  try {
    const allQuestions = await Question.find();
    res.status(200).json(allQuestions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions", error });
  }
});

// Route to get only answered questions
router.get("/answered", async (req, res) => {
  try {
    const answeredQuestions = await Question.find({ answer: { $ne: null } });
    res.status(200).json(answeredQuestions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching answered questions", error });
  }
});
router.get("/all/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ message: "Error fetching question", error });
  }
});
// In your question routes file
router.get("/question/:id", (req, res) => {
  const { id } = req.params;
  Question.findById(id)
    .then((question) => {
      if (!question) {
        return res.status(404).send("Question not found");
      }
      res.json(question);
    })
    .catch((err) =>
      res.status(500).json({ message: "Error fetching question", error: err })
    );
});
// Route to fetch answered questions
// Route to fetch answered questions
router.get("/answers", async (req, res) => {
  try {
    const answeredQuestions = await Question.find({ answer: { $ne: null } });
    // console.log("Answered Questions:", answeredQuestions); // Add this for debugging
    res.status(200).json(answeredQuestions); // Send the answered questions to the frontend
  } catch (error) {
    console.error("Error fetching answered questions:", error);
    res.status(500).json({ message: "Error fetching answered questions" });
  }
});

module.exports = router;

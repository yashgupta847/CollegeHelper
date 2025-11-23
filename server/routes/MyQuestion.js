const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

/* -------------------------------
   POST QUESTION  (with flash)
--------------------------------*/
router.post("/MyQuestion", async (req, res) => {
  const { name, email, question } = req.body;

  if (!name || !email || !question) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newQuestion = new Question({ name, email, question });
    await newQuestion.save();

    // FLASH MESSAGE
    req.flash(
      "success",
      "Your question has been submitted successfully. Misbehavior may lead to Cyber Cell action."
    );

    return res.status(201).json({
      message: "Question submitted successfully!",
      newQuestion,
      flash: req.flash("success")
    });

  } catch (error) {
    return res.status(500).json({ message: "Error saving question", error });
  }
});

/* -------------------------------
   POST ANSWER (Admin only)
--------------------------------*/
router.post("/myAnswers", async (req, res) => {
  const { questionId, answer, secretKey } = req.body;

  try {
    if (secretKey !== process.env.ADMIN_SECRET) {
      return res.status(403).json({ message: "Not authorized to answer" });
    }

    const question = await Question.findById(questionId);
    if (!question)
      return res.status(404).json({ message: "Question not found" });

    question.answer = answer;
    await question.save();

    // FLASH MESSAGE
    req.flash(
      "success",
      "Answer submitted successfully! All admin actions are monitored."
    );

    return res.status(200).json({
      message: "Answer submitted successfully!",
      question,
      flash: req.flash("success")
    });

  } catch (error) {
    return res.status(500).json({ message: "Error saving answer", error });
  }
});


router.get("/all", async (req, res) => {
  try {
    const allQuestions = await Question.find();
    res.status(200).json(allQuestions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions", error });
  }
});

router.get("/answered", async (req, res) => {
  try {
    const answeredQuestions = await Question.find({ answer: { $ne: null } });
    res.status(200).json(answeredQuestions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching answered questions", error });
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

router.get("/answers", async (req, res) => {
  try {
    const answeredQuestions = await Question.find({ answer: { $ne: null } });
    res.status(200).json(answeredQuestions); 
  } catch (error) {
    res.status(500).json({ message: "Error fetching answered questions" });
  }
});

module.exports = router;

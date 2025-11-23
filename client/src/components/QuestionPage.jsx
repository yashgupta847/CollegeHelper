import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./QuestionPage.css";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [flashMessage, setFlashMessage] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/all`)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, [apiUrl]);

  // Move question card UP in the list
  const moveUp = (id) => {
    setQuestions((prev) => {
      const index = prev.findIndex((q) => q._id === id);
      if (index <= 0) return prev; // already at top

      const newOrder = [...prev];
      const item = newOrder.splice(index, 1)[0];
      newOrder.unshift(item);

      return newOrder;
    });
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim() === "") return;

    axios
      .post(`${apiUrl}/api/MyQuestion`, {
        name: "User",
        email: "user@example.com",
        question: newQuestion,
      })
      .then((response) => {
        if (response.data.flash) {
          setFlashMessage(response.data.flash);
        }

        setQuestions((prev) => [response.data.newQuestion, ...prev]);
        setNewQuestion("");
      })
      .catch((error) => console.error("Error submitting question:", error));
  };

  return (
    <div className="questions-page">

      {/* Warning Box */}
      <div className="warning-box">
        ⚠️ <strong>Strict Warning:</strong>
        Any kind of misbehavior, abusive language, inappropriate questions,
        misinformation, harassment, or illegal activity is strictly prohibited.
        Your IP address is recorded. <strong>Violation → Cyber Cell action.</strong>
      </div>

      {/* Flash */}
      {flashMessage && <div className="flash-box">{flashMessage}</div>}

      <h1 className="page-title">Ask Relevant Question</h1>

      {/* Ask Question Form */}
      <form onSubmit={handleQuestionSubmit} className="new-question-form">
        <textarea
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Write your question here..."
          className="question-input"
        />
        <button type="submit" className="submit-button">
          Submit Question
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Questions List */}
      <div className="questions-list">
        {questions.filter((q) => !q.answer).length === 0 ? (
          <p className="no-questions">No unanswered questions right now.</p>
        ) : (
          questions
            .filter((q) => !q.answer)
            .map((question) => (
              <div key={question._id} className="question-item">

                {/* UP Button */}
                <button
                  className="up-btn"
                  onClick={() => moveUp(question._id)}
                >
                  ▲
                </button>

                {/* Question Text */}
                <h3 className="question-title">
                  <span className="q-label">QUES–</span>
                  {question.question.toUpperCase()}
                </h3>

                {/* Answer Button */}
                <Link to={`/answers/${question._id}`} className="answer-btn">
                  Answer this question → (Admin Only)
                </Link>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;

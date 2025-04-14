import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./QuestionPage.css";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000"; 

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/all`)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, [apiUrl]);

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
        setQuestions((prevQuestions) => [
          response.data.newQuestion,
          ...prevQuestions,
        ]);
        setNewQuestion("");
      })
      .catch((error) => console.error("Error submitting question:", error));
  };

  return (
    <div className="questions-page">
      <h1 className="page-title">Ask a Question</h1>

      <form onSubmit={handleQuestionSubmit} className="new-question-form">
        <textarea
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="𝐀𝐬𝐤 𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧 𝐇𝐞𝐫𝐞...."
          className="question-input"
        />
        <button type="submit" className="submit-button">
          Submit Question
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="questions-list">
        {questions.filter((q) => !q.answer).length === 0 ? (
          <p className="no-questions">No unanswered questions available.</p>
        ) : (
          questions
            .filter((question) => !question.answer) // show only unanswered
            .map((question, index) => (
              <div key={index} className="question-item">
                <h3
                  className="question-title"
                  style={{ fontSize: "18px", color: "cyan" }}
                >
                  𝐐- {question.question}
                </h3>

                <Link
                  to={`/answers/${question._id}`}
                  className="answer-link"
                  style={{ textDecoration: "none" }}
                >
                  Answer this question - only admin allowed
                </Link>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;

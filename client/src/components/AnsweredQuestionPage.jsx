import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AnsweredPage.css";

const AnsweredQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

    axios
      .get(`${apiUrl}/api/answers`)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);
  const moveUp = (id) => {
    setQuestions((prev) => {
      const index = prev.findIndex((q) => q._id === id);
      if (index <= 0) return prev;
      const newOrder = [...prev];
      const item = newOrder.splice(index, 1)[0];
      newOrder.unshift(item);
      return newOrder;
    });
  };
  return (
    <div className="answered-questions-page">
      <h1 className="page-title">Answered Questions</h1>
      <div className="answered-questions-list">
        {questions.length === 0 ? (
          <p className="no-questions">No answered questions available.</p>
        ) : (
          questions.map((question) => (
            <div key={question._id} className="question-item slide">
              {/* UP BUTTON */}
              <button className="up-btn" onClick={() => moveUp(question._id)}>
                ▲
              </button>

              <div className="qa-content">
                <p className="question-title">
                  Qᴜᴇꜱ- {question.question.toUpperCase()}
                </p>

                <p className="answer-text">
                  ANS-
                  <img
                    src="https://up.yimg.com/ib/th/id/OIP.k8SaQpgYKSjt-Cc06pS2HAHaHa?pid=Api&rs=1&c=1&qlt=95&w=123&h=123"
                    className="ans-icon"
                    alt=""
                  />
                  {question.answer.toUpperCase()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AnsweredQuestions;

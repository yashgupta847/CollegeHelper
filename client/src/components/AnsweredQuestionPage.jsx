import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AnsweredPage.css";
const AnsweredQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/answers") // Update with your backend URL
      .then((response) => {
        console.log("Fetched answered questions:", response.data); // Check the data in console
        setQuestions(response.data);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  return (
    <div className="answered-questions-page">
      <h1 className="page-title">Answered Questions</h1>
      <div className="answered-questions-list">
        {questions.length === 0 ? (
          <p className="no-questions">No answered questions available.</p>
        ) : (
          questions.map((question) => (
            <div key={question._id} className="question-item">
              <p className="question-title" style={{color:"#e0e0e0" , fontSize:"17px"}}>Qᴜᴇꜱ- {question.question}</p>
              <p style={{color:"#e67e22" , fontSize:"17px"}}> ᴀɴꜱ- {question.answer}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AnsweredQuestions;

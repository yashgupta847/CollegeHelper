import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom"; 
import './AnswerPage.css'
const AnswerPage = () => {
  const { questionId } = useParams();
  const navigate = useNavigate(); 
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const correctSecretKey = process.env.REACT_APP_SECRET_KEY; 

  useEffect(() => {
    axios.get(`http://localhost:5000/api/question/${questionId}`)
      .then(response => {
        setQuestion(response.data);
      })
      .catch(error => console.error('Error fetching question:', error));
  }, [questionId]);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (!answer.trim()) {
      setErrorMessage('Answer cannot be empty');
      return;
    }

    

    axios.post('http://localhost:5000/api/myAnswers', {
      questionId,
      answer,
      secretKey,
    })
    .then(response => {
      alert('✅ Answer submitted successfully!');
      setAnswer('');
      setSecretKey('');
      setErrorMessage('');
      navigate('/answers'); 
    })
    .catch(error => {
      console.error('Error submitting answer:', error);
      setErrorMessage('Error submitting answer. Please try again.');
    });
  };

  return (
    <div className="answer-page">
      <h1 className="page-title">Answer the Question</h1>
      {question ? (
        <div className="question-detail">
          <h3 className="question-title">{question.question}</h3>
          <form onSubmit={handleAnswerSubmit} className="answer-section">
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Write your answer here..."
              className="answer-input"
            />
            <input
              type="password"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              placeholder="Enter secret key"
              className="secret-key-input"
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="submit-button">Submit Answer</button>
          </form>
        </div>
      ) : (
        <p className="loading-message">Loading question...</p>
      )}
    </div>
  );
};

export default AnswerPage;

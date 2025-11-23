// import logo from './logo.svg';
import './App.css';
import AnsweredQuestionsPage from './components/AnsweredQuestionPage';  // Import the new component
import Question from './components/QuestionPage';
import LandingPage from './components/landingPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnswerPage from './components/AnswerPage';
import GlimpesPage from './components/GlimpesPage';
import FAQPage from './components/FAQ';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route exact path= "/" element={<LandingPage/>}/>
       <Route exact path="/questions" element={<Question/>}/>
       <Route exact path="/answers/:questionId" element={<AnswerPage />} />
       <Route exact path="/answers" element={<AnsweredQuestionsPage/>} />
       <Route exact path="/glimpes" element={<GlimpesPage/>} />
       <Route exact path="/faq" element={<FAQPage/>} />
       </Routes>
    
    </Router>
  );
}

export default App;

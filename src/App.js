import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the CSS file
import LandingPage from './components/LandingPage';
import GameCategory from './components/GameCategory';
import Quiz from './components/Quiz';

const App = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [category, setCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const getQuestions = async (category) => {
    const API_URL = `https://opentdb.com/api.php?amount=20&type=multiple&category=${encodeURIComponent(category)}`;
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.results && data.results.length > 0 && data.results[0].question) {
        setQuestions(data.results);
      } else {
        console.error("Invalid data format:", data);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const selectOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      setTimeout(() => {
        // Nothing to do here for now
      }, 1500);
    } else {
      setTimeout(() => {
        setCurrentQuestionIndex(0);
        setCurrentView('landing');
      }, 500);
    }
  }, [currentQuestionIndex, questions.length]);

  return (
    <div className="main">
      <div className="container">
        {currentView === 'landing' && (
          <LandingPage onStart={() => setCurrentView('category')} />
        )}
        {currentView === 'category' && (
          <GameCategory
            onSelectCategory={(selectedCategory) => {
              setCategory(selectedCategory);
              getQuestions(selectedCategory);
              setCurrentView('quiz');
            }}
          />
        )}
        {currentView === 'quiz' && (
          <Quiz
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
            onOptionSelect={selectOption}
            score={score}
            onRestart={() => setCurrentView('landing')}
          />
        )}
      </div>
    </div>
  );
};

export default App;

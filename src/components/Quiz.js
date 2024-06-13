import React from 'react';

const Quiz = ({ questions, currentQuestionIndex, onOptionSelect, score, onRestart }) => {
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz">
      {currentQuestion ? (
        <>
          <h2 id="question">{currentQuestion.question}</h2>
          <div id="options-container">
            {currentQuestion.incorrect_answers.map((option, index) => (
              <button
                key={index}
                onClick={() => onOptionSelect(false)}
                className="option"
              >
                {option}
              </button>
            ))}
            <button onClick={() => onOptionSelect(true)} className="option">
              {currentQuestion.correct_answer}
            </button>
          </div>
          <div>Score: {score}</div>
        </>
      ) : (
        <h2>Loading questions...</h2>
      )}
      <button className="restart-game" onClick={onRestart}>Restart Game</button>
    </div>
  );
};

export default Quiz;

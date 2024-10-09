import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const QuizSettings = () => {
  const [amount, setAmount] = useState(5);
  const [difficulty, setDifficulty] = useState('easy');
  const [type, setType] = useState('boolean');
  
  const navigateTo = useNavigate();

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleStartQuiz = () => {
    navigateTo('/apiDeconstruct',{state:
        {   Amount:amount,
            Difficulty:difficulty,
            Type:type}
        });
    
  };

  return (
    <div>
      <h1>Quiz Settings</h1>
      
      <label>
        Amount:
        <select value={amount} onChange={handleAmountChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </label>

      <label>
        Difficulty:
        <select value={difficulty} onChange={handleDifficultyChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>

      <label>
        Type:
        <select value={type} onChange={handleTypeChange}>
          <option value="boolean">True/False</option>
          <option value="multiple">Multiple Choice</option>
        </select>
      </label>

      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default QuizSettings;

import React, { useState,useEffect } from 'react';

function AnswerButtons({ correctAnswer, incorrectAnswers }) {
  

  return (
    <div>
      {answerChoices.map((answer, index) => (
        <button key={index}>{answer}</button>
      ))}
    </div>
  );
}

export default AnswerButtons;
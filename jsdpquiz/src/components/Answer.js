// Answer.js
import React from "react";

const Answer = ({ answer, index, selectedAnswerIndex, onAnswerSelected }) => {
  return (
    <li 
      onClick={() => onAnswerSelected(answer, index)}
      className={selectedAnswerIndex === index ? "selected-answer" : null}
    >
      {answer}
    </li>
  );
};

export default Answer;

// Answer.js
import React from "react";

const Answer = ({ answer, index, selectedAnswerIndex, onAnswerSelected }) => {
  return (
    <li
      onClick={() => onAnswerSelected(answer, index)}
      className={`answer-item ${
        selectedAnswerIndex === index ? "selected-answer" : ""
      }`}
    >
      {answer}
    </li>
  );
};

export default Answer;

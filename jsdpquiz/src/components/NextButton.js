// NextButton.js
import React from "react";

const NextButton = ({ onClickNext, isLastQuestion, selectedAnswerIndex }) => {
  return (
    <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
      {isLastQuestion ? "Finish" : "Next"}
    </button>
  );
};

export default NextButton;

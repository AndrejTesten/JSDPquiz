// NextButton.js
import React from "react";

const NextButton = ({ onClickNext, isLastQuestion, selectedAnswerIndex }) => {
  const handleClick = () => {
    if (isLastQuestion) {
      // Call onClickNext with a flag indicating it's the last question
      onClickNext(true);
    } else {
      // Call onClickNext with a flag indicating it's not the last question
      onClickNext(false);
    }
  };

  return (
    <button onClick={handleClick} disabled={selectedAnswerIndex === null}>
      {isLastQuestion ? "Finish" : "Next"}
    </button>
  );
};

export default NextButton;

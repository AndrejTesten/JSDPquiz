// Question.js
import React from "react";

const Question = ({
  question,
  activeQuestion,
  questionsLength,
  videoURL,
  imageURL,
}) => {
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="questionsGroup">
      <span className="active-question-no">
        {addLeadingZero(activeQuestion + 1)}
      </span>
      <span className="total-question">/{addLeadingZero(questionsLength)}</span>
      <h2 className="question">{question}</h2>
      {videoURL && (
        <div className="video-container">
          <video src={videoURL} controls />
        </div>
      )}
      {imageURL && (
        <div className="image-container">
          <img src={imageURL} alt="Question" />
        </div>
      )}
    </div>
  );
};

export default Question;

import React, { useState, useEffect } from "react";
import { quiz } from "../utils/questions.js";
import Answer from "../components/Answer";
import Question from "../components/Question";
import NextButton from "../components/NextButton";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const { beginner, mid, hard } = quiz.levels;

  useEffect(() => {
    // Selecting questions from each level
    const easyQuestions = beginner.questions.slice(0, 3);
    const medQuestions = mid.questions.slice(0, 3);
    const hardQuestions = hard.questions.slice(0, 4);

    // Combine all selected questions into a single array
    const allQuestions = [...easyQuestions, ...medQuestions, ...hardQuestions];

    // Shuffle questions
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []); // Empty dependency array ensures this effect runs only once

  const onClickNext = () => {
    console.log("Clicked Next");
    setResult((prevResult) => {
      const isCorrect =
        selectedAnswer === shuffledQuestions[activeQuestion].correctAnswer;
      console.log("isCorrect:", isCorrect);
      return {
        ...prevResult,
        score: isCorrect ? prevResult.score + 5 : prevResult.score,
        correctAnswers: isCorrect
          ? prevResult.correctAnswers + 1
          : prevResult.correctAnswers,
        wrongAnswers: isCorrect
          ? prevResult.wrongAnswers
          : prevResult.wrongAnswers + 1,
      };
    });

    setSelectedAnswer("");
    setSelectedAnswerIndex(null);

    if (activeQuestion !== shuffledQuestions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      console.log("Next Question:", activeQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    console.log("Selected Answer:", answer);
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer);
  };

  const { question, choices, videoURL, imageURL } =
    shuffledQuestions[activeQuestion] || {};
  const correctAnswer = (shuffledQuestions[activeQuestion] || {}).correctAnswer;

  return (
    <div className="quiz">
      {!showResult ? (
        <>
          <Question
            question={question}
            activeQuestion={activeQuestion}
            questionsLength={shuffledQuestions.length}
            videoURL={videoURL}
            imageURL={imageURL}
          />
          <ul className="answers">
            {choices &&
              choices.map((answer, index) => (
                <Answer
                  key={answer}
                  answer={answer}
                  index={index}
                  selectedAnswerIndex={selectedAnswerIndex}
                  onAnswerSelected={onAnswerSelected}
                />
              ))}
          </ul>
          <NextButton
            onClickNext={onClickNext}
            isLastQuestion={activeQuestion === shuffledQuestions.length - 1}
            selectedAnswerIndex={selectedAnswerIndex}
          />
        </>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Ukupno Pitanja: <span>{shuffledQuestions.length}</span>
          </p>
          <p>
            Poeni: <span> {result.score}</span>
          </p>
          <p>
            Broj tačnih odgovora:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Broj netačnih odgovora:<span> {result.wrongAnswers}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;

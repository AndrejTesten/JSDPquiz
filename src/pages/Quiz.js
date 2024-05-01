import React, { useState, useEffect } from "react";
import { quiz } from "../utils/questions.js";
import Answer from "../components/Answer";
import Question from "../components/Question";
import NextButton from "../components/NextButton";
import { Link, useParams } from "react-router-dom";

const Quiz = () => {
  const { name } = useParams();
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
  const submitScore = async (name) => {
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_API_URL_POST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          playerName: name,
          playerScore: result.score,
        }),
      });
      if (!response.ok) {
        console.log(name);
        throw new Error("Failed to submit score");
      }
      console.log("Score submitted successfully");
    } catch (error) {
      console.error("Error submitting score:", error);
    }
  };
  const onClickNext = (isLastQuestion) => {
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

    if (isLastQuestion) {
      // Logic to send data to the database on finish
      submitScore(name);
      setShowResult(true);
    } else {
      setActiveQuestion((prev) => prev + 1);
      console.log("Next Question:", activeQuestion + 1);
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
          <h3>Rezultat</h3>
          <p>
            Poeni: <span> {result.score}</span>
          </p>
          <p>
            Tačni odgovori:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Netačni odgovori:<span> {result.wrongAnswers}</span>
          </p>
          <ul></ul>
          <div className="meni">
            <li className="homeButton">
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Nazad na početnu
              </Link>
            </li>
            <li className="rezultatButton">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/leaderboard"
              >
                Pogledaj tabelu
              </Link>
            </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

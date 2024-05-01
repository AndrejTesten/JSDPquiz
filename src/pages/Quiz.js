import React, { useState, useEffect } from "react";
import { quiz } from "../utils/questions.js";
import Answer from "../components/Answer";
import Question from "../components/Question";
import NextButton from "../components/NextButton";
import { Link, useParams } from "react-router-dom";

const Quiz = () => {
  const { name } = useParams();
  const [backendUrl, setBackendUrl] = useState("");
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

  useEffect(() => {
    // Fetch backend API URL from environment variable
    const apiUrl = process.env.REACT_APP_BACKEND_API_URL;

    setBackendUrl(apiUrl);

    // Fetch shuffled questions
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${apiUrl}/questions`);
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        setShuffledQuestions(data.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const submitScore = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/addscore`, {
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
        throw new Error("Failed to submit score");
      }
      console.log("Score submitted successfully");
    } catch (error) {
      console.error("Error submitting score:", error);
    }
  };

  const onClickNext = (isLastQuestion) => {
    setResult((prevResult) => {
      const isCorrect =
        selectedAnswer === shuffledQuestions[activeQuestion].correctAnswer;
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
      submitScore();
      setShowResult(true);
    } else {
      setActiveQuestion((prev) => prev + 1);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer);
  };

  const { question, choices, videoURL, imageURL } =
    shuffledQuestions[activeQuestion] || {};

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
            onClickNext={() =>
              onClickNext(activeQuestion === shuffledQuestions.length - 1)
            }
            isLastQuestion={activeQuestion === shuffledQuestions.length - 1}
            selectedAnswerIndex={selectedAnswerIndex}
          />
        </>
      ) : (
        <div className="result">
          <h3>Result {name}</h3>
          <p>
            Total Questions: <span>{shuffledQuestions.length}</span>
          </p>
          <p>
            Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
          <ul>
            <li className="homeButton">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/home"
              >
                Back to Home
              </Link>
            </li>
            <li className="resultButton">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/leaderboard"
              >
                View Leaderboard
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;

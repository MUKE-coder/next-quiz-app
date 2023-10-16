"use client";
import { questions } from "@/questions";
// import { questions } from "@/questions";
import Link from "next/link";
import { useState } from "react";

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const question = questions[currentQuestion];
  console.log(selectedOption);
  console.log(score);
  function handleOptionSelect(option) {
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === question.answer) {
      setScore((prevScore) => prevScore + 1);
    }
  }
  function handleNextClick() {
    setCurrentQuestion((prevQn) => prevQn + 1);
    setShowAnswer(false);
    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
      setCurrentQuestion(0);
    }
  }
  function restartQuiz() {
    setShowResults(false);
    setCurrentQuestion(0);
  }
  return (
    <>
      {showResults ? (
        <div className="quiz-app">
          <h2>Your Scores</h2>
          <h3>
            You scored {score} out {questions.length}
          </h3>
          <button onClick={restartQuiz}>Start the Quiz Again</button>
        </div>
      ) : (
        <div className="quiz-app">
          <div className="quiz-header">
            <h2>Awesome Quiz Application</h2>
          </div>
          <div className="quiz-body">
            <h1>
              {question.id}. {question.question}
            </h1>
            <div className="options">
              {question.options.map((option) => {
                return (
                  <button
                    className={
                      showAnswer && option === question.answer
                        ? "correctAnswer"
                        : showAnswer && option === selectedOption
                        ? "wrongAnswer"
                        : ""
                    }
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="quiz-footer">
            <p>
              {currentQuestion + 1} out of {questions.length}
            </p>
            <button onClick={handleNextClick} className="next">
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

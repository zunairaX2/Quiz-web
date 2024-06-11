import React from "react";
import { questions } from "../data/quizData";
import { useState } from "react";

export default function Quiz() {
  let [showFinalResults, setShowFinalResults] = useState(false);
  let [score, setScore] = useState(0);
  let [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score+1);
    }
    if(currentQuestion+1<questions.length){
      setCurrentQuestion(currentQuestion+1);
    }
    else {
      setShowFinalResults(true);
    }
  };

  const handlePlayAgain = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowFinalResults(false);
  };

  return (
    <div className="container">
      {/* headings */}
      <h1 className="mt-4 text-center">
        USA Quiz{" "}
        <i>
          <i className="fa-solid fa-flag-usa"></i>
        </i>
      </h1>
      <h3 className="text-center">Score: {score}</h3>

      {/* for next page navigation */}
      {showFinalResults ? (
        <div className="container">
          <div className="d-flex justify-content-center">
            <div
              className="card text-center mb-3 bg-black text-white"
              style={{ width: "40rem" }}
            >
              <div className="card-body">
                <h5 className="card-title text-white">Final Results</h5>
                <h5 className="card-title text-white">
                  {score} out of {questions.length} correct - (
                  {(score / questions.length) * 100}%)
                </h5>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handlePlayAgain}
                >
                  Play Again
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div
            className="card text-center mb-3 bg-black text-white"
            style={{ width: "40rem" }}
          >
            <div className="card-body">
              <h5 className="card-title text-white">
                Question {currentQuestion + 1} out of {questions.length}
              </h5>
              <p className="card-text text-white">
                {questions[currentQuestion].questionText}
              </p>
              <div className="list-group">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    className="btn btn-outline-secondary mt-2 text-white"
                    onClick={() => handleOptionClick(option.isCorrect)}
                  >
                    {option.optionsText}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* quiz Card */}
    </div>
  );
}

import React from "react";

export default function Quiz({
  quizdata,
  nextQuestion,
  handleNext,
  handleAnswer,
  score,
  selectedOption,
}) {
  const quest = quizdata[nextQuestion];
  return (
    <div className="container">
      <h1 className="mt-4 text-center">
        USA Quiz{" "}
        <i>
          <i className="fa-solid fa-flag-usa"></i>
        </i>
      </h1>
      <h3 className="text-center">Score: {score}</h3>
      <div>
        <h2 className="text-center">
          {nextQuestion + 1}. {quest.question}
        </h2>
        <div className="d-flex flex-column">
          <div
            className="options-sec card mb-3 text-white align-self-center"
            style={{ width: "35rem" }}
            
          >
            {quest.options.map((option, index) => (
              <button
                className={`
              option-btn
              ${
                selectedOption
                  ? option === quest.answer
                    ? "correct"
                    : option === selectedOption
                    ? "incorrect"
                    : ""
                  : ""
              } text-black align-self-center mt-3 mb-3
            `} 
                style={{ width: "20rem" }}
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-dark align-self-center"
            style={{ width: "10rem" }}
            onClick={handleNext}
            disabled={!selectedOption}
          >
            Next
          </button>
          <span className="align-self-center">
            {nextQuestion + 1} of {quizdata.length} Question
          </span>
        </div>
      </div>
    </div>
  );
}
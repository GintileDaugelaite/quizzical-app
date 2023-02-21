import React, { useState } from "react";

const QuizCard = ({
  question,
  incorrect_answers,
  correct_answer,
  setCurrentQuestionIndex,
  currentQuestionIndex,
  quizDataLength,
  fetchQuizData,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({ correctAnswers: 0 });

  const allAnswers = [...incorrect_answers, correct_answer].sort();

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prevResult) =>
      selectedAnswer
        ? {
            ...prevResult,
            correctAnswers: prevResult.correctAnswers + 1,
          }
        : {
            ...prevResult,
            correctAnswers: prevResult.correctAnswers,
          }
    );
    if (currentQuestionIndex !== quizDataLength - 1) {
      setCurrentQuestionIndex((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
      setCurrentQuestionIndex(0);
      console.log("what");
    }
    console.log(result);
  };

  const handleSelect = (answer, index) => {
    //answer shows the selected answer (in text), index shows selected answer's index (for css purpose, to change the class as selected)
    setSelectedAnswerIndex(index);

    if (answer === correct_answer) {
      console.log("yay");
      setSelectedAnswer(true);
    } else {
      console.log("nay");
      setSelectedAnswer(false);
    }
  };

  const playAgain = () => {
    fetchQuizData(() => {
      setCurrentQuestionIndex(0);
      setSelectedAnswerIndex(null);
      setResult({ correctAnswers: 0 });
      setShowResult(false);
    });
  };

  return (
    <div className="quiz">
      {!showResult ? (
        <>
          <div className="quiz__question-number">
            Question: {currentQuestionIndex + 1} out of {quizDataLength}
          </div>
          <h2 className="quiz__question">
            {question
              .replaceAll("&quot;", '"')
              .replaceAll("&amp;", "&")
              .replaceAll("&#039;s", "'s")}
          </h2>
          <ul className="quiz__answer-container">
            {allAnswers.map((answer, i) => (
              <li
                className={`quiz__answer ${
                  selectedAnswerIndex === i ? "quiz__answer-selected" : ""
                }`}
                onClick={() => handleSelect(answer, i)}
                key={answer}
              >
                {answer
                  .replaceAll("&#039;s", "'s")
                  .replaceAll("&auml;", "ä")
                  .replaceAll("&aring;", "å")
                  .replaceAll(/&#039;/g, "'")}
              </li>
            ))}
          </ul>
          <button className="quiz__next-button" onClick={onClickNext}>
            {currentQuestionIndex === quizDataLength - 1 ? "Finish" : "Next"}
          </button>
        </>
      ) : (
        <div className="quiz__results">
          <h1 className="quiz__results-headline">Results</h1>
          <div>
            You scored {result.correctAnswers}/{quizDataLength} correct answers
          </div>
          <button className="quiz__replay-button" onClick={playAgain}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizCard;

// ${
//     isCorrect === true && selectedIndex === i
//       ? "quiz__answer-correct"
//       : ""
//   } ${
//     isCorrect === false && selectedIndex === i
//       ? "quiz__answer-incorrect"
//       : ""
//   }

import React, { useState } from "react";
import he from "he";

const QuizCard = ({
  question,
  incorrect_answers,
  correct_answer,
  setCurrentQuestionIndex,
  currentQuestionIndex,
  quizDataLength,
  fetchQuizData,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({ correctAnswers: 0 });
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [answerDisabled, setAnswerDisabled] = useState(false);

  const allAnswers = [...incorrect_answers, correct_answer].sort();

  const onClickNext = () => {
    setShowCorrectAnswer(true);
    setAnswerDisabled(true);
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
      setTimeout(() => {
        setShowCorrectAnswer(false);
        setAnswerDisabled(false);
        setCurrentQuestionIndex((prevQuestion) => prevQuestion + 1);
        setSelectedAnswer(false);
        setSelectedAnswerIndex(null);
      }, 1000);
    } else {
      setShowResult(true);
      setCurrentQuestionIndex(0);
    }
  };

  const handleSelect = (answer, index) => {
    //answer shows the selected answer (in text), index shows selected answer's index
    setSelectedAnswerIndex(index);
    if (answer === correct_answer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const playAgain = () => {
    fetchQuizData(() => {
      setCurrentQuestionIndex(0);
      setSelectedAnswerIndex(null);
      setResult({ correctAnswers: 0 });
      setShowResult(false);

      setShowCorrectAnswer(false);
      setAnswerDisabled(false);
    });
  };

  return (
    <div className="quiz">
      {!showResult ? (
        <>
          <div className="quiz__question-number">
            Question: {currentQuestionIndex + 1} out of {quizDataLength}
          </div>
          <h2 className="quiz__question">{he.decode(question)}</h2>
          <ul className="quiz__answer-container">
            {allAnswers.map((answer, i) => (
              <li
                className={`quiz__answer ${
                  selectedAnswerIndex === i ? "quiz__answer-selected" : ""
                }
              ${
                showCorrectAnswer &&
                correct_answer === answer &&
                "quiz__answer-correct"
              }
              ${
                showCorrectAnswer &&
                correct_answer !== answer &&
                selectedAnswerIndex === i &&
                "quiz__answer-incorrect"
              }
                `}
                onClick={() => handleSelect(answer, i)}
                key={answer}
                disabled={answerDisabled}
              >
                {/*this library is used to decode some of the symbols that are coming from API */}
                {he.decode(answer)}
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
            You scored {result.correctAnswers}/{quizDataLength} correct answers.
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

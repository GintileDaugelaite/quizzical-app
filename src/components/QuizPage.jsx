import React from "react";
import QuizCard from "./QuizCard";
import { useState, useEffect } from "react";
import axios from "axios";

const QuizPage = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const fetchQuizData = (callback) => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
      )
      .then((res) => {
        setQuizData(res.data.results);
        setCurrentQuestionIndex(0);
        callback();
        console.log(res.data.results);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchQuizData(() => {});
  }, []);

  const currentQuestion =
    quizData.length > 0 ? quizData[currentQuestionIndex] : null;

  return (
    <section className="quiz-page">
      <div className="quiz-page__wrapper">
        {currentQuestion && (
          <QuizCard
            question={currentQuestion.question}
            incorrect_answers={currentQuestion.incorrect_answers}
            correct_answer={currentQuestion.correct_answer}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            currentQuestionIndex={currentQuestionIndex}
            quizDataLength={quizData.length}
            fetchQuizData={fetchQuizData}
          />
        )}
      </div>
    </section>
  );
};

export default QuizPage;

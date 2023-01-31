import React from "react";
import Quiz from "./Quiz";
import { useState, useEffect } from "react";
import axios from "axios";

const QuizPage = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
      )
      .then((res) => {
        setQuizQuestions(res.data.results);
        console.log(res.data.results)
      })
      .catch((error) => console.error(error));
  }, []);



  return (
    <section className="quiz-page-container">
    
      {quizQuestions.map((quizQuestion, i) => <Quiz key={i} {...quizQuestion}/>)}
    </section>
  );
};

export default QuizPage;

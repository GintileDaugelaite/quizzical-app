import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="quiz-container">
      <h1 className="quiz-container__title">Quizzical</h1>
      <p className="quiz-container__description">Test your general knowledge skills</p>
      <Link to="/quiz">
        <button className="quiz-container__btn">Start quiz</button>
      </Link>
    </div>

  );
};

export default HomePage;

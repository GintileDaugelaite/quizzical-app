import React from "react";
import { Link } from "react-router-dom";
import Blob from "./../blobs.svg"
import Blob2 from "./../blob.svg"

const HomePage = () => {
  return (
    <div className="quiz-container">
      <h1 className="quiz-container__title">Quizzical</h1>
      <p className="quiz-container__description">Description</p>
      <Link to="/quiz">
        <button className="quiz-container__btn">Start quiz</button>
      </Link>
      <img className="quiz-container__blue-blob" src={Blob} alt=""/>
      <img className="quiz-container__yellow-blob" src={Blob2} alt=""/>
    </div>

  );
};

export default HomePage;

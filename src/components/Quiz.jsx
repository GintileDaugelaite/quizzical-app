import React from "react";

const Quiz = () => {
  return (
    <div className="quiz">
      <h2 className="quiz__question">How would one say goodbye in Spanish?</h2>
      <ul className="quiz__answer-container">
        <li className="quiz__answer">Adios</li>
        <li className="quiz__answer">Hola</li>
        <li className="quiz__answer">Bye</li>
        <li className="quiz__answer">Salir</li>
      </ul>
    </div>
  );
};

export default Quiz;

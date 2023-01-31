import React, {useState, useEffect} from "react";

const Quiz = ({question, correct_answer, incorrect_answers}) => {
    const [shuffledAnswers, setShuffledAnswers] = useState([])

    const allAnswers = incorrect_answers.concat(correct_answer)
  
    
  useEffect(() => {
    setShuffledAnswers(shuffleArray(allAnswers));
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (


    <div className="quiz">
      <h2 className="quiz__question">{question.replaceAll("&quot;", "\"").replaceAll("&amp;", "&").replaceAll("&#039;s", "'s")}</h2>
      <ul className="quiz__answer-container">
        {shuffledAnswers.map((answer, i) => (<li className="quiz__answer" key={i}>{answer}</li>))}
        {/* <li className="quiz__answer">{correct_answer}</li> */}
        {/* {incorrect_answers.map((wrong, i) => <li className="quiz__answer" key={i}>{wrong.replaceAll("&#039;s", "'s").replaceAll("&auml;", "ä").replaceAll("&aring;", "å").replaceAll(/&#039;/g, "'")}</li>)} */}
{/*         
        <li className="quiz__answer">{incorrect_answers[0]}</li>
        <li className="quiz__answer">{incorrect_answers[1]}</li>
        <li className="quiz__answer">{incorrect_answers[2]}</li> */}
      </ul>
    </div>
  );
};

export default Quiz;

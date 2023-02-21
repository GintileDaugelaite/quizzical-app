import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";
import Blob from "./blobs.svg";
import Blob2 from "./blob.svg";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/quiz" element={<QuizPage />} />
      </Routes>
      <img className="quiz-container__blue-blob" src={Blob} alt="" />
      <img className="quiz-container__yellow-blob" src={Blob2} alt="" />
    </Router>
  );
};

export default App;

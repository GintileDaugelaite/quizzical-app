import "./App.scss";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";

const App = () => {
return(
<Router>
  <Routes>
  <Route exact path="/" element={< HomePage />}/>
  <Route exact path="/quiz" element={< QuizPage />} />
  </Routes>
</Router>
)
}

export default App;

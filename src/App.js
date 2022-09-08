import "./App.css";
import React from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";




function App() {
  const [isFirstTime, setFirstTime] = React.useState(false);

  function startQuiz() {
    setFirstTime((prevFirst) => !prevFirst);
  }

  return (
    <div>
      {isFirstTime ? <Quiz /> : <Start handleClick={startQuiz} />}</div>
  );
}

export default App;

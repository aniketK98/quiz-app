import React from "react";
import CheckAll from "./CheckAll";
import Question from "./Question";

export default function Quiz() {
  const [questionData, setQuestionData] = React.useState(() => {
    let defaultInfo = [];
    for (let n = 0; n < 5; n++) {
      defaultInfo.push({
        question: "Loading...",
        correct_ans: "",
        all_ans: ["...", "...", "...", "..."],
        id: Math.floor(Math.random() * 999999999),
        choosen_answer: "...",
      });
    }
    return defaultInfo;
  });

  const [correctCounter, setCorrectCounter] = React.useState({
    totalCorrect: 0,
    currentCorrect: 0,
    check: false,
    reset: 0,
  });

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
    )
      .then((data) => data.json())
      .then((responce) =>
        setQuestionData(
          responce.results.map((q) => ({
            question: q.question,
            correct_ans: q.correct_answer,
            all_ans: [...q.incorrect_answers, q.correct_answer].sort(
              () => 0.5 - Math.random()
            ),
            id: Math.floor(Math.random() * 999999999),
            choosen_answer: "...",
          }))
        )
      );
  }, [correctCounter.reset]);

  function chooseAns(event) {
    console.log(event);
    setQuestionData((prevQuestionData) =>
      prevQuestionData.map((currentData) => {
        if (currentData.id == event.target.id) {
          return { ...currentData, choosen_answer: event.target.value };
        } else {
          return currentData;
        }
      })
    );
  }

  function checkCorrect() {
    let correct = 0;
    for (let n = 0; n < questionData.length; n++) {
      if (questionData[n].correct_ans == questionData[n].choosen_answer) {
        correct += 1;
      }
    }
    console.log(correct)
    setCorrectCounter((prevCorrectCounter) => ({
      totalCorrect: prevCorrectCounter.totalCorrect + correct,
      currentCorrect: correct,
      check: true,
      reset: prevCorrectCounter.reset,
    }));
  }

  function reset() {
    setQuestionData(() => {
      let defaultInfo = [];
      for (let n = 0; n < 5; n++) {
        defaultInfo.push({
          question: "Loading...",
          correct_ans: "",
          all_ans: ["...", "...", "...", "..."],
          id: Math.floor(Math.random() * 999999999),
          choosen_answer: "...",
        });
      }
      return defaultInfo;
    });
    setCorrectCounter((prevState) => ({
      totalCorrect: prevState.totalCorrect,
      currentCorrect: 0,
      check: false,
      reset: prevState.reset + 1,
    }));
  }
  let count=1;

  const questionDatajsx = questionData.map((q) => {
    return(
    <Question
      no={count++}
      question={q.question}
      correct_ans={q.correct_ans}
      all_ans={q.all_ans}
      key={q.id}
      id={q.id}
      choosen_answer={q.choosen_answer}
      chooseAns={chooseAns}
      check={correctCounter.check}
    />);
  });


  return (
    <div className="root">
      <div className="container-quiz">
      <h1 className="heading-quiz">{"<"}TECH TRIVIA {" />"}</h1>
        {questionDatajsx}
        <CheckAll
          correctCounter={correctCounter}
          handleClick={checkCorrect}
          handleReset={reset}
        />
      </div>
    </div>
  );
}

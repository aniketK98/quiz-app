import React from "react";

export default function Question(props) {
  function buttonColor(index) {
    if (props.choosen_answer == props.all_ans[index]) {
      if (props.check && props.choosen_answer != props.correct_ans) {
        return { background: "#f29ba7", borderColor: "red" };
      } else if (props.check && props.choosen_answer == props.correct_ans) {
        return { background: "#7bc983", borderColor: "#ff9000" };
      } else {
        return { background: "#7e8afc", borderColor: "#034a16" };
      }
    }
    if (props.check && props.all_ans[index] === props.correct_ans) {
      return { background: "#c8f7c6" };
    }
  }

  return (
    <div>
      <h4>{"Q." + props.no + ") " + props.question}</h4>
      <div className="options">
        <button
          className="option-button"
          onClick={props.check ? null : props.chooseAns}
          id={props.id}
          value={props.check ? null : props.all_ans[0]}
          style={buttonColor(0)}
        >
          {props.all_ans[0]}
        </button>
        <button
          className="option-button"
          onClick={props.check ? null : props.chooseAns}
          id={props.id}
          value={props.all_ans[1]}
          style={buttonColor(1)}
        >
          {props.all_ans[1]}
        </button>
        <button
          className="option-button"
          onClick={props.check ? null : props.chooseAns}
          id={props.id}
          value={props.all_ans[2]}
          style={buttonColor(2)}
        >
          {props.all_ans[2]}
        </button>
        <button
          className="option-button"
          onClick={props.chooseAns}
          id={props.id}
          value={props.all_ans[3]}
          style={buttonColor(3)}
        >
          {props.all_ans[3]}
        </button>
      </div>
    </div>
  );
}

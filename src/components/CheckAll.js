import React from "react";

export default function CheckAll(props) {
  function resultsDisplay() {
    if (props.correctCounter.check) {
      return <h5>You got {props.correctCounter.currentCorrect}/5 correct</h5>;
    }
  }
  function totalResultsDisplay() {
    if (props.correctCounter.reset > 0) {
      if (props.correctCounter.check) {
        return (
          <h5>
            Total correct {props.correctCounter.totalCorrect}/
            {(props.correctCounter.reset + 1) * 5}
          </h5>
        );
      } else {
        return (
          <h5>
            Total correct {props.correctCounter.totalCorrect}/
            {props.correctCounter.reset * 5}
          </h5>
        );
      }
    }
  }
  return (
    <div className="checkAll">
      <button
      className="submit-button"
        onClick={
          !props.correctCounter.check ? props.handleClick : props.handleReset
        }
      >
        {props.correctCounter.check ? "Try New questions" : "Check Result"}
      </button>
      {resultsDisplay()}
      {totalResultsDisplay()}
    </div>
  );
}

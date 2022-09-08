import React from "react";

export default function Start(props) {
  return (
    <div className="root">
      <div className="container">
        <h1 className="app-name">{"<"}TECH TRIVIA {" />"}</h1>
        <button className="start-button" onClick={props.handleClick}>Start</button>
      </div>
    </div>
  );
}

import React from "react";
import Result from "./Result";
import "./Results.css";

const Results = props => {
  return (
    <div className="results">
      {props.results.map(result => (
        <Result
          result={result}
          key={result.imdbID}
          openPopup={props.openPopup}
        />
      ))}
    </div>
  );
};

export default Results;

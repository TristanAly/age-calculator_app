import React from "react";

const Result = ({ year, month, day }) => {
  return (
    <div className="result">
      <p>
        <span>{year}</span> years
      </p>
      <p>
        <span>{month}</span> months
      </p>
      <p>
        <span>{day}</span> days
      </p>
    </div>
  );
};

export default Result;

import React from "react";

const Result = ({ year, month, day }) => {
  return (
    <div className="result">
      <p>{year || "--"} years</p>
      <p>{month || "--"} months</p>
      <p>{day || "--"} days</p>
    </div>
  );
};

export default Result;

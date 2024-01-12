import React from "react";

const Form = () => {
  return (
    <form>
      <div className="labelAndInput">
        <label htmlFor="day">DAY</label>
        <input
          type="number"
          id="day"
          name="day"
          min="1"
          max="31"
          placeholder="DD"
        />
      </div>
      <div className="labelAndInput">
        <label htmlFor="month">MONTH</label>
        <input
          type="number"
          id="month"
          name="month"
          min="1"
          max="12"
          placeholder="MM"
        />
      </div>
      <div className="labelAndInput">
        <label htmlFor="year">YEAR</label>
        <input
          type="number"
          id="year"
          name="year"
          min="1850"
          max="2024"
          placeholder="YYYY"
        />
      </div>
    </form>
  );
};

export default Form;

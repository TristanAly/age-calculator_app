import React, { useState } from "react";
import Result from "../Result/Result";
import arrowDown from "../../assets/icon-arrow.svg";
import Separator from "../Separator/Separator";
import {
  estBissextile,
  dayInMonth,
  dayValidation,
  monthValidation,
  yearValidation,
} from "../../Context/dateFunction";

const Form = () => {
  const [resultDate, setResultDate] = useState(null);
  const [errorMessages, setErrorMessages] = useState({
    day: "",
    month: "",
    year: "",
  });
  const currentDate = new Date();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const day = parseInt(formData.get("day"), 10);
    const month = parseInt(formData.get("month"), 10);
    const year = parseInt(formData.get("year"), 10);

    const inputDate = new Date(year, month - 1, day);

    const errors = {
      day: dayValidation(day, year, month),
      month: monthValidation(month),
      year: yearValidation(year),
    };

    const inputs = ["day", "month", "year"];

    inputs.forEach((inputName) => {
      const inputElement = document.getElementById(inputName);
      inputElement.classList.toggle("error-input", !!errors[inputName]);
    });

    setErrorMessages(errors);

    if (!errors.day && !errors.month && !errors.year) {
      // Calculer l'âge
      const ageDate = new Date(currentDate - inputDate);
      const ageYear = Math.abs(ageDate.getUTCFullYear() - 1970);
      const ageMonth = ageDate.getUTCMonth();
      const ageDay = ageDate.getUTCDate();

      setResultDate({ ageYear, ageMonth, ageDay });
    }
  };

  return (
    <div className="containerForm">
      <form onSubmit={handleFormSubmit} noValidate>
        <div>
          <div className="labelAndInput">
            <label htmlFor="day">DAY</label>
            <input
              type="number"
              id="day"
              name="day"
              min="1"
              max="31"
              placeholder="DD"
              className={`${errorMessages.day ? "error-input" : ""}`}
            />
            <div className="error-message">{errorMessages.day}</div>
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
              className={`${errorMessages.month ? "error-input" : ""}`}
            />
            <div className="error-message">{errorMessages.month}</div>
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
              className={`${errorMessages.year ? "error-input" : ""}`}
            />
            <div className="error-message">{errorMessages.year}</div>
          </div>
        </div>
        <Separator />
      </form>
      {resultDate ? (
        <div>
          <Result
            year={resultDate.ageYear}
            month={resultDate.ageMonth}
            day={resultDate.ageDay}
          />
        </div>
      ) : (
        <div>
          <Result year={"--"} month={"--"} day={"--"} />
        </div>
      )}
    </div>
  );
};

export default Form;

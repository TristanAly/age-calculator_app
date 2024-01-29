import React, { useState } from "react";
import Result from "../Result/Result";
import arrowDown from "../../assets/icon-arrow.svg";
import Separator from "../Separator/Separator";

const FormTest = () => {
  const [resultDate, setResultDate] = useState(null);
  const [errorMessages, setErrorMessages] = useState({
    day: "",
    month: "",
    year: "",
    global: "",
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
      day: dayValidation(day),
      month: monthValidation(month),
      year: yearValidation(year),
      global: globalValidation(inputDate),
    };

    function dayValidation(day) {
      if (!day) return "Le champ jour ne peut pas être vide.";
      if (isNaN(day) || day < 1 || day > 31)
        return "Le jour doit être entre 1 et 31.";
      return "";
    }

    function monthValidation(month) {
      if (!month) return "Le champ mois ne peut pas être vide.";
      if (isNaN(month) || month < 1 || month > 12)
        return "Le mois doit être entre 1 et 12.";
      return "";
    }

    function yearValidation(year) {
      if (!year) return "Le champ année ne peut pas être vide.";
      const currentYear = new Date().getFullYear();
      if (isNaN(year) || year < 1850 || year > currentYear) {
        return `L'année doit être inférieure à ${currentYear}.`;
      }
      return "";
    }

    function globalValidation(inputDate) {
      return inputDate > currentDate
        ? "La date ne peut pas être dans le futur."
        : "";
    }

    const inputs = ["day", "month", "year"];

    inputs.forEach((inputName) => {
      const inputElement = document.getElementById(inputName);
      inputElement.classList.toggle("error-input", !!errors[inputName]);
    });

    setErrorMessages(errors);

    if (!errors.day && !errors.month && !errors.year && !errors.global) {
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
        {/* <Separator /> */}
        {/* <div className="SeparateButton">
          <button type="submit">
            <img src={arrowDown} alt="icon arrow down" />
          </button>
        </div> */}
        <Separator />
      </form>
      <div className="error-message">{errorMessages.global}</div>
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

export default FormTest;

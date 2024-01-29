import React, { useState } from "react";
// import Result from "../Result/Result";

const Form = () => {
  // const [day, setDay] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");
  // const [resultDate, setResultDate] = useState(null);
  // const [valid, setValid] = useState(false);
  // const [error, setError] = useState("");
  // const [dayError, setDayError] = useState("");
  // const [monthError, setMonthError] = useState("");
  // const [yearError, setYearError] = useState("");
  // const [formData, setFormData] = useState({
  //   day: "",
  //   month: "",
  //   year: "",
  // });

  // const handleInputChange = (fieldName, value) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [fieldName]: value,
  //   }));
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez faire quelque chose avec les données du formulaire ici
    const form = e.target;
    const formData = new FormData(form);

    console.log("Données du formulaire :", formData);
    const day = formData.get("day");
    const month = formData.get("month");
    const year = formData.get("year");
    alert(`Day: ${day} Month: ${month} Year: ${year}`);
  };

  // const handleDayChange = (e) => {
  //   const input = e.target.value;
  //   if (/^\d+$/.test(input) && input >= 1 && input <= 31) {
  //     setDay(input);
  //     setDayError("");
  //   } else {
  //     setDayError("Veuillez entrer un nombre entre 1 et 31 pour le jour.");
  //   }
  // };

  // const handleMonthChange = (e) => {
  //   const input = e.target.value;
  //   if (/^\d+$/.test(input) && input >= 1 && input <= 12) {
  //     setMonth(input);
  //     setMonthError("");
  //   } else {
  //     setMonthError("Veuillez entrer un nombre entre 1 et 12 pour le mois.");
  //   }
  // };

  // const handleYearChange = (e) => {
  //   const input = e.target.value;
  //   const currentYear = new Date().getFullYear();
  //   if (/^\d+$/.test(input) && input > 0 && input <= currentYear) {
  //     setYear(input);
  //     setYearError("");
  //   } else {
  //     setYearError(
  //       `Veuillez entrer un nombre entre 1 et ${currentYear} pour l'année.`
  //     );
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (dayError && monthError && yearError) {
  //     const birthDate = new Date(`${year}-${month}-${day}`);
  //     const currentDate = new Date();

  //     if (!day || !month || !year) {
  //       setError("Veuillez remplir toutes les valeurs de date de début.");
  //     } else if (birthDate > currentDate) {
  //       setError("La date de naissance ne peut pas être dans le futur.");
  //     } else {
  //       const difference = currentDate - birthDate;
  //       const ageDate = new Date(difference);
  //       const years = ageDate.getUTCFullYear() - 1970;
  //       const months = ageDate.getUTCMonth();
  //       const days = ageDate.getUTCDate() - 1;

  //       setResultDate({ days, months, years });
  //     }
  //   } else {
  //     setError("Veuillez corriger les erreurs dans le formulaire.");
  //   }
  // };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
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
        {/* {dayError && <div style={{ color: "red" }}>{dayError}</div>} */}
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
        {/* {monthError && <div style={{ color: "red" }}>{monthError}</div>} */}
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
        {/* {yearError && <div style={{ color: "red" }}>{yearError}</div>} */}
        <button type="submit">Calculate</button>
      </form>
      {/* {error && <div style={{ color: "red" }}>{error}</div>} */}
      {/* {resultDate ? (
        <div>
          <Result
            year={resultDate.years}
            month={resultDate.months}
            day={resultDate.days}
          />
        </div>
      ) : (
        <div>
          <Result year={"--"} month={"--"} day={"--"} />
        </div>
      )} */}
    </div>
  );
};

export default Form;

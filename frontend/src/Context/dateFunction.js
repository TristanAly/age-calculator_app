export function estBissextile(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function dayInMonth(year, month) {
  const daysMonth31 = [1, 3, 5, 7, 8, 10, 12];
  const daysMonth30 = [4, 6, 9, 11];

  if (month === 2) {
    return estBissextile(year) ? 29 : 28;
  } else if (daysMonth31.includes(month)) {
    return 31;
  } else if (daysMonth30.includes(month)) {
    return 30;
  } else {
    return monthValidation(month);
  }
}

export function dayValidation(day, year, month) {
  if (!day) return "Le champ jour ne peut pas être vide.";
  if (isNaN(day) || day < 1 || day > dayInMonth(year, month))
    return "Le jour doit être entre 1 et " + dayInMonth(year, month) + ".";
  return "";
}

export function monthValidation(month) {
  if (!month) return "Le champ mois ne peut pas être vide.";
  if (isNaN(month) || month < 1 || month > 12)
    return "Le mois doit être entre 1 et 12.";
  return "";
}

export function yearValidation(year) {
  if (!year) return "Le champ année ne peut pas être vide.";
  const currentYear = new Date().getFullYear();
  if (isNaN(year) || year < 1850 || year > currentYear) {
    return `L'année doit être inférieure à ${currentYear}.`;
  }
  return "";
}

export function globalYearValidation(inputDate) {
  const currentDate = new Date();
  return inputDate > currentDate
    ? "La date ne peut pas être dans le futur."
    : "";
}

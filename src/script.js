"use strict";

// For this project I will not be using an API to grab the current date so the calculator will function as if the date is statically set to 01/01/2023 for the sake of testing functionality of the app.

const calcAgeBtn = document.querySelector(`button`);

calcAgeBtn.addEventListener(`click`, function () {
  let day = document.getElementById(`dayInput`).value;
  let month = document.getElementById(`monthInput`).value;
  let year = document.getElementById(`yearInput`).value;

  let yearAge = 2022 - year;
  let monthAge = 12 - month;
  let dayAge = 30 - day;
  document.getElementById(`yearsOld`).textContent = yearAge;
  document.getElementById(`monthsOld`).textContent = monthAge;
  document.getElementById(`daysOld`).textContent = dayAge;
});

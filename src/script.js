"use strict";

// For this project I will not be using an API to grab the current date (could not find one that was free and strictly had the date as opposed to other details I did not need/want) so the calculator will function as if the date is statically set to 01/01/2023 for the sake of testing functionality of the app.

const calcAgeBtn = document.querySelector(`button`);
const errorTextDay = document.querySelector(`#day`);
const errorTextMonth = document.querySelector(`#month`);
const errorTextYear = document.querySelector(`#year`);
const errorMessage = document.querySelector(`#errorMessage`);

const errorFunc = function () {
  errorTextDay.style.color = `red`;
  errorTextMonth.style.color = `red`;
  errorTextYear.style.color = `red`;
  errorMessage.classList.remove(`hidden`);
};

const errorFixed = function () {
  errorTextDay.style.color = ``;
  errorTextMonth.style.color = ``;
  errorTextYear.style.color = ``;
  errorMessage.classList.add(`hidden`);
};

const errorCheck = function () {
  let day = document.getElementById(`dayInput`).value;
  let month = document.getElementById(`monthInput`).value;
  let year = document.getElementById(`yearInput`).value;
  if (day > 31) {
    return errorFunc();
  } else if (month > 12) {
    return errorFunc();
  } else if (year > 2023 || year < 1920) {
    return errorFunc();
  } else {
    errorFixed();
    let yearAge = 2022 - year;
    let monthAge = 12 - month;
    let dayAge = 30 - day;
    document.getElementById(`yearsOld`).textContent = yearAge;
    document.getElementById(`monthsOld`).textContent = monthAge;
    document.getElementById(`daysOld`).textContent = dayAge;
  }
};

calcAgeBtn.addEventListener(`click`, function () {
  errorCheck();
});

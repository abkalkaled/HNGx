// Day of the week
function displayCurrentDayOfTheWeek() {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfTheWeek = daysOfTheWeek[currentDate.getUTCDay()];
  document.querySelector("[data-testid='currentDayOfTheWeek']").innerHTML =
    dayOfTheWeek;
}

setInterval(displayCurrentDayOfTheWeek);

/**Time of the day */

function displayUTCTime() {
  const now = new Date();
  const milliseconds = now.getTime();
  document.querySelector('[data-testid="currentUTCTime"]').innerHTML =
    "" + milliseconds;
}

setInterval(displayUTCTime, 1000);

window.onload = displayUTCTime;

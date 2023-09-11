function displayCurrentDayOfTheWeek() {
  var daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfTheWeek = daysOfTheWeek[currentDate.getDay()];
  document.querySelector("[data-testid='currentDayOfTheWeek']").textContent =
    "" + dayOfTheWeek;
}

function displayUTCTime() {
  const now = new Date();
  const milliseconds = now.getTime();
  document.querySelector('[data-testid="currentUTCTime"]').innerHTML =
    "" + milliseconds;
}

setInterval(displayUTCTime, 1000);

window.onload = displayUTCTime;

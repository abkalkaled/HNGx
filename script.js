function dispayDay() {
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
  const dayIndex = currentDate.getUTCDay();
  const dayOfTheWeek = daysOfTheWeek[dayIndex];
  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    "Day of the week" + dayOfTheWeek;
}

function displayUTCTime() {
  const now = new Date();
  const utcString = now.toUTCString();
  const utcTimeCont = document.querySelector('[data-testid="currentUTCTime"]');
  utcTimeCont.textContent = utcString;
}

setInterval(displayUTCTime, 1000);

window.onload = displayUTCTime;

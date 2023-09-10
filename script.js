function displayUTCTime() {
  const now = new Date();
  const utcString = now.toUTCString();
  const utcTimeCont = document.querySelector('[data-testid="currentUTCTime"]');
  utcTimeCont.textContent = utcString;
}

setInterval(displayUTCTime, 1000);

window.onload = displayUTCTime;

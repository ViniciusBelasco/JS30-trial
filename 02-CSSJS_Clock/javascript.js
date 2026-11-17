const FULL_MINUTE = 60;
const FULL_HOUR = 12;
const FULL_CICLE = 360;
const DEFAULT_START_POINT = 90;

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  const now = new Date();
  secondHand.style.transform = `rotate(${calculateTimeDegrees(now.getSeconds(), FULL_MINUTE)}deg)`;
  minuteHand.style.transform = `rotate(${calculateTimeDegrees(now.getMinutes(), FULL_MINUTE)}deg)`;
  hourHand.style.transform = `rotate(${calculateTimeDegrees(now.getHours(), FULL_HOUR)}deg)`;
}

function calculateTimeDegrees(measure, cicleTime) {
  return (measure / cicleTime) * FULL_CICLE + DEFAULT_START_POINT;
}

setInterval(setDate, 1000);

const FULL_MINUTE = 60;
const FULL_CICLE = 360;
const DEFAULT_START_POINT = 90;

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = calculateTimeDegrees(seconds);

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = calculateTimeDegrees(minutes);
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = calculateTimeDegrees(hours);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(minutes, minutesDegrees);
}

function calculateTimeDegrees(measure) {
  return (measure / FULL_MINUTE) * FULL_CICLE + DEFAULT_START_POINT;
}

setInterval(setDate, 1000);

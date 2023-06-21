//get current hours
//display hours in hour display
//get minutes
//display current minutes
//get seconds
//display seconds
const secondsDisplay = document.querySelector(".sec-display");
const minutesDisplay = document.querySelector(".min-display");
const hoursDisplay = document.querySelector(".hour-display");
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hands = document.querySelectorAll(".hand");
//analog clock
function getAnalogTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = seconds * 6 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = minutes * 6 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(getAnalogTime, 1000);
//digital clock
function getDigitalTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  seconds < 10
    ? (secondsDisplay.textContent = `:0${seconds}`)
    : (secondsDisplay.textContent = `:${seconds}`);
  console.log(seconds);

  const minutes = now.getMinutes();
  minutes < 10
    ? (minutesDisplay.textContent = `:0${minutes}`)
    : (minutesDisplay.textContent = `:${minutes}`);
  const hours = now.getHours();
  hours < 10
    ? (hoursDisplay.textContent = "0" + hours)
    : (hoursDisplay.textContent = hours);
}

setInterval(getDigitalTime, 1000);

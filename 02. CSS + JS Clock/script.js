const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDeg = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDeg % 360}deg)`;

  const minute = now.getMinutes();
  const minuteDeg = (minute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDeg % 360}deg)`;

  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDeg % 360}deg)`;
}

setInterval(setDate, 1000);

setDate();

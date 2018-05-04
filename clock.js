const getTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  return { hour, minute, second }
}

const moveSecondHand = () => {
  const secondHand = document.getElementById('second');
  setInterval(() => {
    let { second } = getTime();
    // console.log(second);
    let secondHandAngle = second / 60 * 360;
    console.log(`second hand angle: ${secondHandAngle}`);
    secondHand.style.transform = `rotate(${secondHandAngle}deg)`;
  }, 1000)
}

const moveMinuteHand = () => {
  const minuteHand = document.getElementById('minute');
  setInterval(() => {
    let { minute } = getTime();
    // console.log(`minutes: ${minute}`);
    let minuteHandAngle = minute / 60 * 360;
    console.log(`minute hand angle: ${minuteHandAngle}`);
    minuteHand.style.transform = `rotate(${minuteHandAngle}deg)`;
  }, 1000);
}

const moveHourHand = () => {
  const hourHand = document.getElementById('hour');
  setInterval(() => {
    let { hour, minute } = getTime();
    // console.log(`hour: ${hour}`);
    let hourHandAngle = (hour / 12 * 360) + (minute / 60 * 30);
    console.log(`hour hand angle: ${hourHandAngle}`);
    hourHand.style.transform = `rotate(${hourHandAngle}deg)`;
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  moveSecondHand();
  moveMinuteHand();
  moveHourHand();
});
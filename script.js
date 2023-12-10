setInterval(setTime, 1000)
const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');
const secondHand = document.querySelector('.hand.second');
const hourTime = document.querySelector('.digital-clock .hour');
const minuteTime = document.querySelector('.digital-clock .minute');
const secondTime = document.querySelector('.digital-clock .second');
const clockTime = document.querySelector('.digital-clock');

function setTime(){
const time = new Date;
const analogSeconds = time.getSeconds() * 6;
const analogMinutes = time.getMinutes() * 6;
const analogHours = time.getHours() *30;

hourHand.style.transform = `rotate(${analogHours}deg)`;
minuteHand.style.transform = `rotate(${analogMinutes}deg)`;
secondHand.style.transform = `rotate(${analogSeconds}deg)`;

const  digitalHours = time.getHours().toString().padStart(2, '0');
  const digitalMinutes = time.getMinutes().toString().padStart(2, '0');
  const digitalSeconds = time.getSeconds().toString().padStart(2, '0');
  const newTime = `${digitalHours} : ${digitalMinutes} : ${digitalSeconds}`;
  clockTime.textContent = newTime
}
setTime()





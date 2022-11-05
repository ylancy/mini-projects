const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("hour");
const secondEl = document.getElementById("second");

const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

updateCounter();

function updateCounter() {
    let now = Date.now();
    let gap = newYearDate - now;
    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / second);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateCounter, 1000);
}



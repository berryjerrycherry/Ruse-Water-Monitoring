const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

const clock = setInterval(time, 0);

function time() {
    const now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min
    if (sec < 10) sec = "0" + sec;

    hour.innerHTML = hr;
    minute.innerHTML = min;
    seconds.innerHTML = sec;
}
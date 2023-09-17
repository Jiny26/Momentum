
const clock = document.querySelector("h3.clock");
function getTime(){
    const date = new Date();
    const HOUR = String(date.getHours()).padStart(2,"0");
    const MINUTE = String(date.getMinutes()).padStart(2,"0");
    const SECOND = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${HOUR}:${MINUTE}:${SECOND}`;
}

getTime();
setInterval(getTime, 1000);
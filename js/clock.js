const date = new Date();

const today = document.querySelector("h2.today");

function getToday(){
    const MONTH = ["January","February","March","Aprill","May","June","July","August","September","October","November","December"]
    const WEEKDAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"]
    const Year = String(date.getFullYear()).padStart(2,"0");
    const Month = MONTH[date.getMonth()];
    const Date = String(date.getDate()).padStart(2,"0");
    const Day = WEEKDAY[date.getDay()];
    console.log(Day)
    today.innerText = `${Year} ${Month} ${Date} ${Day}`;
}

const clock = document.querySelector("h3.clock");

function getClock() {
    const Hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
}

getToday();
getClock(); //web site가 실행하자마자 call funtion
setInterval(getClock,1000)
//pad.Start(길이, "앞쪽에 넣을 문자")함수는 String Type을 다루기 때문에 문자로 변환해서 사용
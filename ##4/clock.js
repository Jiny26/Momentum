const clockTitle = document.querySelector("h2#js-clock");

function XDayCalc() {
    const XDay = new Date("2023-12-24");
    const today = new Date();

    const diff = XDay - today;
    
    const diffDay = Math.floor(diff / (1000*60*60*24) + 2);
    //오늘과 당일 포함 2일
    const diffHour = String(Math.floor((diff / (1000*60*60)) % 24)).padStart(2,"0");
    const diffMinute = String(Math.floor((diff / (1000*60)) % 60)).padStart(2,"0");
    const diffSecond = String(Math.floor(diff / 1000 % 60)).padStart(2,"0");

    clockTitle.innerText = `
    ${diffDay}days ${diffHour}hour ${diffMinute}Minute ${diffSecond}Seconds Left 
    `
}


XDayCalc();
setInterval(XDayCalc, 1000);

const clock = document.querySelector("h2.clock");

function getClock() {
    const date = new Date();
    
    const Year = String(date.getFullYear()).padStart(2,"0");
    const Month = String(date.getMonth() + 1).padStart(2,"0");
    const Day = String(date.getDate()).padStart(2,"0");
    const Hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `
    ${Year}:${Month}:${Day}:${Hours}:${Minutes}:${Seconds}
    `;
}
getClock(); //web site가 실행하자마자 call funtion
setInterval(getClock,1000)
//pad.Start(길이, "앞쪽에 넣을 문자")함수는 String Type을 다루기 때문에 문자로 변환해서 사용
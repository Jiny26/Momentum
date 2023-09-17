const today_date = new Date();

const today = document.querySelector("h2.today");

function getToday(){
    const MONTH = ["January","February","March","Aprill","May","June","July","August","September","October","November","December"]
    const WEEKDAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"]
    const Year = String(today_date.getFullYear()).padStart(2,"0");
    const Month = MONTH[today_date.getMonth()];
    const Date = String(today_date.getDate()).padStart(2,"0");
    const Day = WEEKDAY[today_date.getDay()];
    today.innerText = `${Year} ${Month} ${Date} ${Day}`;
}
getToday();
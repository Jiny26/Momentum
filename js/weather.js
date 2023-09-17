const API_KEY = "77764521e5a026366b42f48c954ab392"

// getCurrentPosition은 2개의 argument가 필요함
// 하나는 모든게 잘 됬을 때 실행될 함수
// 하나는 에러가 났을 때 실행될 함수
function onGeoOK(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then((data) => {
            const cityContainer = document.querySelector("#weather span:first-child");
            const weatherContainer = document.querySelector("#weather span:last-child");
         cityContainer.innerText = data.name;
         weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        

    });
    //fetch를 하고 . json으로부터 response 받아 내용을 추출 했으면 . data 얻기
}

function onGeoError() {
    alert("Can't find your position ! ㅠ")
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);


// * function을 만들 때
// function생성 후 실행 버튼을 만든 다음 브라우저에서 실행 되는지
// console.log나 alert으로 확인 한 후
// function안에 코드를 작성하기
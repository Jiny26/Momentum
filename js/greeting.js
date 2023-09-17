const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');


//string을 작성 시 오타가 있을 경우 js는 no지적
//string을 변수명으로 작성시 오타가 있을 경우 찾을 수 없다고 지적
// = 오타에 의한 실수가 적어짐
//이 js에서는 //*참조
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//KEY는 local storage에 있는 key와 value중 key를 말함

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value; //user가 input에 입력한 유저명 -> localstorage에 저장
    localStorage.setItem(USERNAME_KEY, username); //* 이 username
    paintGreetings(username)
}


function paintGreetings(username) {
    greeting.innerText =
    `Hello ' ${username} '`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //* 이 username

if (savedUsername === null) {
    //show the loginForm
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greeting
    paintGreetings(savedUsername)
}
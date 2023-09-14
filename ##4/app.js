const maxNumber = document.getElementById("maxNumber")
const guessForm = document.getElementById("js-guess");
const result = document.getElementById("js-result");
const resultSpan = result.querySelector("span");
const score = result.querySelector("span");


//handleGuessSubimt(e) 함수 만들기
function handleGuessSubimt(e) {
    //e의 새로고침 막기
    e.preventDefault();

    // 변수 guessInput = guessForm > input
    const guessInput = guessForm.querySelector("input");

    //if문 guessInput 그리고 maxNumber이 비어있으면 return
    
    if (guessInput === "" && maxNumber === ""){
        // resultSpan.innerText = "";
        // score.style.color = "red";
        // score.innerText = "<strong>값을 입력해주세요</strong>";
        return
    }

    const max = maxNumber.value;
    const random = Math.ceil(Math.random() * max);
    console.log(random);
    const userGuess = parseInt(guessInput.value, 10);
    console.log(userGuess)
    
    resultSpan.innerText =`
    You chose: ${userGuess},
    the machine chose: ${random}.
    ${userGuess === random ? "You won!" : "You lost"}
    `;
    
}


guessForm.addEventListener("submit",handleGuessSubimt);

//변수 max = value 값 받기
//변수 random = max값 활용해서 랜덤 숫자 받기




















// const defaultValue = document.querySelector(".default")
// const choseValue = document.querySelector(".userChose")
// const userForm = document.querySelector("#userForm")

// const cNum = document.querySelector(".chose_number")
// const mNum= document.querySelector(".machine_number")

// const lose = document.querySelector(".resulte_lose")
// const win = document.querySelector(".resulte_win")

// const HIDDEN_CLASSNAME = "hidden";

// //입력값이 비었을 때 
// // if (defaultValue === "" || userChose ==="") {
// //     lose.innerText = "";
// //     win.innerText = "";
// //     cNum.style.color = "red";
// //     mNum.style.color = "red";
// //     defaultValue.innerText = "<strong>Please selec Number!</strong>"
// // }


// //play 버튼을 눌렀을 때 실행될 함수
// function playBtnClick(event){
//     //1 새로고침 방지
//     event.preventDefault();
//     //2 .box add
//     const choseBox = document.querySelector(".box");
//     cNum.innerText = choseValue.value;
//     mNum.innerText = randomValue;
//     choseBox.classList.remove(HIDDEN_CLASSNAME);
    
//     if (choseValue === randomValue) {
//         // 값이 같으면
//         console.log(randomValue);
//         lose.classList.add(HIDDEN_CLASSNAME);
//         win.classList.remove(HIDDEN_CLASSNAME);
//     } else {
//         // 값이 다르면
//         console.log(randomValue);
//         win.classList.add(HIDDEN_CLASSNAME);
//         lose.classList.remove(HIDDEN_CLASSNAME);
//     }
// }

// userForm.addEventListener("submit", playBtnClick)


// //submit 할 때마다 randomValue가 return
// function clickGetRandomNum(){
//     return randomValue;
// }

// const ramdomNumber = [1, 2, 3];
// const randomValue = ramdomNumber[Math.floor(Math.random() * ramdomNumber.length)];

// userForm.addEventListener("submit", clickGetRandomNum);

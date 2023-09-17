const todoForm = document.querySelector("#right #todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#right #todo-list");
const TODOS_KEY = "todos" 
//...Problem2: Problem1은 해결! 하지만 새로 값을 입력하면,
//.............localStorage에 기존에 남아있던 데이터가 사라지고
//.............새로운 값만 남음
//.............todos가 비어있기 때문
//상수를 변수로 변경해주고
let todos = []

function saveLocalstorage() {
    // todos를 localStorage에 set.
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    //STRINGIFY = 변수 등을 문자열로 바꿈
    //PARSE = 문자열을 JSON으로 바꿈
    //localStorage에는 array로 저장이 안됨
    // 그러므로 JSON.stringify()를 써서 string으로 저장한 다음에
    //다시 JSON.parse()를 이용해 array로 꺼냄
}

function deleteTodo(event){
    const li = event.target.parentElement;
    //어떤 li를 클릭했는지 알아야함
    // deleteTodo를 하는 대상의 event property, target을 찾아 버튼의 부모 = li를 찾아야함
    li.remove();
    
    console.log(li.id);

    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    // 원하는 li를 지우고 싶으면
    // Array에서 filtering하여 지우고자 하는 조건을 지정해 삭제하고
    // 나머지 array만 남겨 새로운 array를 만든다
    // function은 조건을 지정해 
    // 조건 = true시 return하여 삭제한다

    saveLocalstorage();
    //todos DB에서 todo를 지운 다음 saveLocalstorage를 한번 더 불러야 함
}

function paintTodo(newTodo) {
    //화면에 newTodo를 표(paint)시해주는 함수
    //console.log("I will paint", newTodo);
    //3.
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newTodo.id;
    span.innerText = newTodo.text; //id와 text값 중 text만 받기 
    const button = document.createElement("button");
    button.innerText = `ㅅ`;
    button.addEventListener("click",deleteTodo)
    li.appendChild(button);
    li.appendChild(span);
    //console.log(li)
    todoList.appendChild(li);
}

function handleTodoSubmit(e) {
    //0. submit하면 새로고침 방지
    e.preventDefault();
    //console.log(todoInput.value)

    //1. submit 하면 입력값이 사라지고 newTodo에 클론하는 것
    const newTodo = todoInput.value
    todoInput.value = "";
    //console.log(newTodo, todoInput.value)
    //2. newTodo를 push하고, newTodo를 paintTodo함수 실행

    //...Problem3: 삭제한 li가 localStorage에 남아있어서
    //.............새로고침하면 다시 부활
    //...그래서 array의 각각의 item에 [{id:1212, text:input.value}, ...] 이렇게 만들고 싶음
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveLocalstorage();
}

todoForm.addEventListener("submit", handleTodoSubmit);


//...Problem1: 새로고침 시, todos가 localStorage에 남아있지만
//.............화면에는 새로고침되는 부분
const savedTodos = localStorage.getItem(TODOS_KEY)

//savedTodos null일 때 = localstorage가 비었을 때 =  li가 없을때
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    //localstorage가 있을 때, todos array는 parsedTodos로 변경
    todos = parsedTodos;
    //JSON.parse()를 이용해 array로 꺼낸 것을
    // array.forEach로, 반복문 없이 아이템 각각에 funtion 적용
    parsedTodos.forEach(paintTodo);

    // function say(item){
    //     console.log("say",item)
    // }
    //parsedTodos.forEach(say);
    //parsedTodos.forEach((item) => console.log("say",item)); 위와 같음
    //array에 있는 Item에. 각각. (funtion을 실행)
}


const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input") // === const toDoInput = documnet.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li"); //html에 li요소 생성
    const span = document.createElement("span"); //html에 spon 요소 생성
    li.appendChild(span); // span은 li 요소 내부에 위치하게 됨
    span.innerText = newTodo; //사용자로부터 입력받은 값을 텍스트에 저장
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault()
    const newTodo = toDoInput.value;
    toDoInput.value = ""
    paintToDo(newTodo)
}

toDoForm.addEventListener("submit", handleToDoSubmit);
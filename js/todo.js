const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input") // === const toDoInput = documnet.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    const li = event.target.parentElement; //이벤트가 발생했을 때, 해당 객체를 지정, 그것의 부모 태그를 지정
    li.remove(); //위에서 지정된 요소를 삭제
}

function paintToDo(newTodo){
    const li = document.createElement("li"); //html에 li요소 생성
    const span = document.createElement("span"); //html에 spon 요소 생성
    span.innerText = newTodo; //사용자로부터 입력받은 값을 텍스트에 저장
    const button = document.createElement("button")
    button.innerText ="❌"
    button.addEventListener("click",deleteToDo )

    //append는 맨 마지막에 위치해야 한다.
    li.appendChild(span); // span은 li 요소 내부에 위치하게 됨
    li.appendChild(button)
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault()
    const newTodo = toDoInput.value;
    toDoInput.value = ""
    paintToDo(newTodo)
}

toDoForm.addEventListener("submit", handleToDoSubmit);
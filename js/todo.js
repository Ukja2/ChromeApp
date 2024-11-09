const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input") // === const toDoInput = documnet.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

//Todolist가 저장된 배열
const toDos = [];

function saveToDos() {
    //JSON.stringify : js의 객체나 배열같은 값을 문자열 형태로 변환시켜주는 메서드
    // 로컬저장소에 데이터를 저장할 때 객체, 배열을 직접저장할 수 없고, 문자열만 저장가능하기 때문에 변환 후 저장한다.
    //이를 통해 [1]이란 형태의 배열은 "[""1""]" 이러한 형태를 띤다.
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

//ToDolist 삭제
function deleteToDo(event){
    const li = event.target.parentElement; //이벤트가 발생했을 때, 해당 객체를 지정, 그것의 부모 태그를 지정
    li.remove(); //위에서 지정된 요소를 삭제
}

//ToDolist 목록 생성
function paintToDo(newTodo){
    const li = document.createElement("li"); //html에 li요소 생성
    const span = document.createElement("span"); //html에 spon 요소 생성
    span.innerText = newTodo; //사용자로부터 입력받은 값을 텍스트에 저장
    const button = document.createElement("button")
    button.innerText ="❌"
    button.addEventListener("click",deleteToDo) //삭제 함수 호출

    //append는 맨 마지막에 위치해야 한다.
    li.appendChild(span); // span은 li 요소 내부에 위치하게 됨
    li.appendChild(button)
    toDoList.appendChild(li)
}

//Todolist 실행
function handleToDoSubmit(event) {
    event.preventDefault()
    const newTodo = toDoInput.value;
    toDoInput.value = ""
    toDos.push(newTodo) //Todolist를 배열에 저장
    paintToDo(newTodo)//목록 생성 함수 호출
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
    //문자열 형태로 변환된 배열이나 객체를 원래의 형태로 복원하기 위해 사용한다.
    const parsedToDos = JSON.parse(savedToDos);

    //forEach: 배열을 순회하며 각각의 요소에 대해 지정된 작업을 실행하는 메서드임
    //화살표 함수로 나타낼 수 있으며, 이는 일반적으로 만드는 함수와 같은 형태로 fucntion, 함수명 등을 적지 않아도 되기에 편리하다.
    parsedToDos.forEach(item => console.log("this is the turn of", item ) );
}
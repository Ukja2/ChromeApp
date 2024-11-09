const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input") // === const toDoInput = documnet.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

//Todolist가 저장된 배열
/*빈 배열로 시작하며 입력된 값은 로컬저장소로 저장된다. 이때의 값들은 새로고침을 해도 로컬저장소에 남아있는데.
여기서 만약 const로 선언되어 있으면 새로고침 후 빈 배열에 새로운 todo를 작성해도 이전값이 업데이트 되지 않은 채 새로운 값들이 덮어쓰기 된다.
그렇기에 let으로 선언 후 아래 조건문처럼 toDos 배열에 로컬저장소에 저장되어있던 이전 배열값들을 저장해야 된다.
*/

let toDos = [];

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
    saveToDos(); //배열에 저장된 Todolist들을 문자열로 변환 후 로컬저장소에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY)


//페이지가 새로고침되고 실행될 조건문 즉 새로고침되어도 기존의 Todolist가 사라지지 않게 하기위함
if(savedToDos !== null){
    //문자열 형태로 변환된 배열이나 객체를 원래의 형태로 복원하기 위해 사용한다.
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //로컬스토리지에 todo가 있으면 toDos에 parsedToDos를 넣어 이전에 저장되어 있던 모든 todo들을 복원할 수 있다.
    //이렇게 하면 새로고침 후 새로운 todo를 작성해도 
    
    parsedToDos.forEach(paintToDo);
}
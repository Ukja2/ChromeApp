const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

//문자열과 같이 중요하지 않은 정보를 담을 때는 대문자로 지정
const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

//onLoginSubmit 함수가 호출될 때, 브라우저는 발생한 이벤트에 대한 정보를 담은 event 객체를 자동으로 만들어 함수의 첫 번째 매개변수로 전달함 
function onLoginSubmit(event){ 
    
    //html의 form은 submit을 하면 브라우저의 기본 동작인 새로고침을 하는데 이를 막아주는 함수 이를 통해 submit을 할때마다 새로고침 되는 현상을 예방할 수 있음
    //event 함수는 preventDefault 함수를 기본적으로 갖고 있음
    event.preventDefault(); 

    //로그인 시 loginForm 숨기고 h1을 나타나게
    loginForm.classList.add(HIDDEN_CLASSNAME); //loginForm에 css의 hidden 클래스 추가
    const username = loginInput.value; //입력값을 username에 저장

    //localStorage.setItem: 로컬저장소에 해당 key와 value를 저장함
    //username에 Ukja2를 넣으면 Storage에 key는 username value는 Ukja2와 같은 형태로 저장됨
    localStorage.setItem(USERNAME_KEY, username);
    
    
    paintGreeting(username);
    }

//로그인 후 사용자 정보 표현 함수
function paintGreeting(username){ 
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem(USERNAME_KEY); //username 키에 저장된 값을 불러옴
if(savedUsername === null){ 
    loginForm.classList.remove(HIDDEN_CLASSNAME); //첫 페이지에서 SavedUsename에 USERNNAME-KEY의 값이 null이면 hidden 클래스 삭제 
    loginForm.addEventListener("submit" , onLoginSubmit);
} else {
    paintGreeting(savedUsername)
}
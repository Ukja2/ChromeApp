const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector(" #login-form input");
const greeting = document.querySelector(" #greeting")

const HIDDEN_CLASSNAME = "hidden"; //문자열과 같이 중요하지 않은 정보를 담을 때는 대문자로 지정

function onLoginSubmit(event){ //onLoginSubmit 함수가 호출될 때, 브라우저는 발생한 이벤트에 대한 정보를 담은 event 객체를 자동으로 만들어 함수의 첫 번째 매개변수로 전달함 
    
    //html의 form은 submit을 하면 브라우저의 기본 동작인 새로고침을 하는데 이를 막아주는 함수 이를 통해 submit을 할때마다 새로고침 되는 현상을 예방할 수 있음
    //event 함수는 preventDefault 함수를 기본적으로 갖고 있음
    event.preventDefault(); 
    
    //로그인 시 loginForm 숨김고 h1을 나타나게
    const username = loginInput.value; //입력값을 username에 저장
    loginForm.classList.add(HIDDEN_CLASSNAME);  //loginForm에 css의 hidden 클래스 추가
    greeting.innerText = `Hello ${username}` //텍스트를 "Hello" + username 형식으로 변환, * 백틱 기호를 사용해야만 이와 같은 형태로 작성가능
    greeting.classList.remove(HIDDEN_CLASSNAME); //숨겨지게 만드는 hidden 클래스를 삭제 -> 화면에 나타나게 됨
}

function handleLinkClick(){
    alert("clicked!");
}


//아래에서 onLoginSubmit()과 같이 괄호를 치면 자동적으로 실행 후 이후의 이벤트에 대해서는 아무런 동작을 하지 않게된다.
//submit이라는 이벤트가 발생할 때만 onLoginSubmit 함수가 실행되는 것이 목표이기 때문
//아래의 코드는 form이 제출될 때마다 onLoginSubmit함수 호출
loginForm.addEventListener("submit", onLoginSubmit);
 
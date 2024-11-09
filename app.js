const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector(" #login-form input");


//onLoginSubmit 함수가 호출될 때, 브라우저는 발생한 이벤트에 대한 정보를 담은 event 객체를 자동으로 만들어 함수의 첫 번째 매개변수로 전달함 
function onLoginSubmit(event){
    
    //html의 form은 submit을 하면 브라우저의 기본 동작인 새로고침을 하는데 이를 막아주는 함수 이를 통해 submit을 할때마다 새로고침 되는 현상을 예방할 수 있음
    //event 함수는 preventDefault 함수를 기본적으로 갖고 있음
    event.preventDefault(); 
    
    console.log(event);
 
}

//아래에서 onLoginSubmit()과 같이 괄호를 치면 자동적으로 실행되기 때문에 넣지 않는다.
//submit이라는 이벤트가 발생할 때만 onLoginSubmit 함수가 실행되는 것이 목표이기 때문
//아래의 코드는 form이 제출될 때마다 onLoginSubmit함수 호출
loginForm.addEventListener("submit", onLoginSubmit);
const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello")
}


/*
setInterval: 일정 시간 간격마다 지정한 작업을 반복적으로 실행하는 함수
setInterval(fucntion, delay)의 형태로 
function: 주기적으로 실행할 함수 또는 코드 지정
delay: 반복 주기를 밀리초(1초 = 1000ms) 단위로 지정
*/
setInterval(sayHello, 5000); 
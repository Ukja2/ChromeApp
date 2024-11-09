const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello")
}

/*
ssetInterval과 비슷한 형태를 띠지만 약간의 차이가 있다.
setTimeout은 특정 시간 이후에 작업을 한 번만 실행하므로, 
반복이 필요하다면 setInterval을, 일회성 지연 실행이 필요할 때는 setTimeout을 사용할 수 있다.
 */
setTimeout(sayHello, 5000)
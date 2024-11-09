const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

}

//함수를 호출함으로써 사아트가 load되자마자 getClock()을 실행하고 이후 매초마다 실행되도록
getClock() //해당 함수가 없으면 사이트 실행시 00:00:00의 형태가 나타나고 1초뒤 Interval이 실행됨
setInterval(getClock, 1000);

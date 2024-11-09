const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();

    //getxxxx()는 숫자형태이기 때문에 padstart와 함께 사용할 수 없음 그래서 String()을 사용해 문자열로 변환 후 padstart를 사용해야 한다.
    //padStart()를 통해 1(시,분,초)일때 01의 형태로 나타낼 수 있다.
    const hours =String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

//함수를 호출함으로써 사아트가 load되자마자 getClock()을 실행하고 이후 매초마다 실행되도록
getClock() //해당 함수가 없으면 사이트 실행시 00:00:00의 형태가 나타나고 1초뒤 Interval이 실행됨
setInterval(getClock, 1000);

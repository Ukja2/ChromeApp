

function onGeoOk(position){
    //현재 위치한 곳을 좌표로 나타내는 함수
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    //날씨 api
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    
    fetch(url).
    then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function onGeoError(){
    alert("위치를 찾을 수 없습니다.")
}

//사용자의 위치를 찾는 함수 (성공했을 때의 실행 될 함수, 실패했을 때의 실행 될 함수)의 형태로 작성된다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)


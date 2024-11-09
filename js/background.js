//배경이미지 배열 생성
const images= ["0.jpg", "1.jpg", "2.jpg"]; 

//랜덤 이미지 생성기
const chosenImage = images[Math.floor(Math.random()* images.length)]

// HTML <img> 요소를 동적으로 생성하여 bgImage라는 변수에 저장
const bgImage = document.createElement("img");

//bgImage <img> 요소의 이미지 경로를 설정
bgImage.src = `img/${chosenImage}`

bgImage.classList.add("bg-image");

//생성한 <img> 요소를 html의 <body>에 추가하여 페이지에 표시되도록 함
document.body.appendChild(bgImage)
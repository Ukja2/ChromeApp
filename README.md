## 간단한 크롬 앱 구현
전체적인 틀은 강의를 통해 만들었고, 전체적인 css, 일부 기능은 직접 구현해보았다.

####  앱 동작에 사용한 기능
#### 1. 랜덤 배경 및 명언 생성기
배경이미지 및 명언을 담은 배열 생성 후 Math 객체의 메서드를 통해
0~1까지의 난수를 생성, 해당 값을 배열의 길이와 곱하여 소수점을 탈락시켜 해당 값만큼 배열의 내부의 인덱스를 랜덤으로 출력한다.
```
const chosenImage = images[Math.floor(Math.random()* images.length)]
```

#### 2. 시계
- 웹 페이지에 현재 시간을 시:분:초 형식으로 실시간으로 표시 페이지가 로드될 때 `바로 시간을 표시` 하고, 그 `이후로는 매초마다 시간을 갱신` 하여 표시 
- Date 객체의 메서드를 Str으로 변환 후 padStart()를 사용하여 1자리 숫자를 두 자리로 표시
- setInterval()로 매초 시간을 업데이트한다.

#### 3. 로그인 폼
- html의 form, input, CSS의 `.class {display:none}`  
- 위 두 가지를 Js에서 `.classList.add` 와 `.classList.remove` , `if/else` 문을 활용해서
로그인 후 form 숨기기, 페이지 새로고침 후 현재의 form 상태 유지기능 

+ `로그인해야 Todolist 목록 생성 ( 추가해본 기능)` : todolist를 입력하는 form에 `display:none` 클래스를 부여 , 로그인폼을 다루는 js파일에서 실행 함수 내부에 `.classList.remove` 을 사용해서 최초 웹페이지에서는 todoform이 나타나지 않고, 로그인을 해야 todoform이 나타나도록 기능 추가

#### 4.TodoList
- 입력한 목록을 배열에 저장 후 해당 배열을 로컬저장소에 `JSON.stringify`, `JSON.parse`로 저장과 불러오기 과정에서 데이터 형식을 유지하는 기능

- 특정 list를 삭제할 수 있도록 각각의 list에 id 값을 주고, .filter 메서드를 통해 delete 이벤트 발생 시 각각의 배열에서 li 요소와 동일한 id 값인 인덱스를 삭제할 수 있는 기능

- `최대 Todolist 입력 개수 제한 ( 추가해본 기능 )` : 제한하고 싶은 개수를 상수에 할당, 입력한 list를 배열에 저장하는 코드 이전에 배열의 길이가 설정한 상수보다 크거나 같을 때 alert를 통해 경고문자를 출력하고, return으로 list 개수가 증가하지 않도록 조건문을 설정
#### 실행 결과

- 로그인 전
![](https://velog.velcdn.com/images/ukja2/post/b17a4066-be96-47c5-b77f-4b7aad987148/image.png)

- 로그인 후 ( 1번 기능 구현을 위해 새로고침한 화면 )
![](https://velog.velcdn.com/images/ukja2/post/c732b2b9-e22b-4b80-9ad1-0a898647cc4d/image.png)

- 1번 기능 구현
![](https://velog.velcdn.com/images/ukja2/post/33f964ae-56cd-4990-abbd-8045bd0de843/image.png)

- ToDoList 입력 개수 제한
![](https://velog.velcdn.com/images/ukja2/post/e90d8b2e-fad6-4ac3-a9bd-936ac79fc22f/image.png)

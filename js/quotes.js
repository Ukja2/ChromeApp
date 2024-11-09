
const quotes = [
    {
    quote: '교육은 세상을 바꿀 수 있는 가장 강력한 무기이다.',
    author: '넬슨 만델라'
    },
    {
    quote: '가장 불만에 가득 찬 고객은 가장 위대한 배움의 원천이다.',
    author: '빌 게이츠'
    },
    {
    quote: '안 하고 죽어도 좋은 일만 내일로 미뤄라.',
    author: '파블로 피카소'
    },
    {
    quote: '미래는 현재 우리가 무엇을 하고 있는가에 달려있다.',
    author: '마하마트 간디'
    },
    {
    quote: '두려워 해야 할 것은 오직 하나, 두려움을 모르는 전사가 되는 것.',
    author: '호메로스'
    },
    {
    quote: '확신하는 정의는 악이다. 정의가 정의이기 위해서는 늘 자신의 정의를 끝없이 의심하지 않으면 안된다.',
    author: '마이크 센델'
    },
    {
    quote: '수인 이세계에 갔을 때 털 없는 고릴라로 보일 수 있기 위해 운동을 시작했다. 단지 그 뿐이다',
    author: '로니 콜먼'
    },
    {
    quote: '모든 사람이 탐욕스럽게 되면 나는 두려워진다. 그러나 모두가 두려워하게 되는 순간 나는 탐욕스러워진다.',
    author: '워렌 버핏'
    },
    {
    quote: '몸을 만들고 싶으면 말로 떠들지 말고, 30분이라도 체육관을 가서 몸으로 떠들어라',
    author: '제이슨 스타뎀'
    },
    {
    quote: '“실패가 두려운 자는 성공할 자격이 없다.”',
    author: '찰스 바클리'
    },
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


/*
Math.random(): 0 이상 1 미만의 난수를 생성
* quote.length : quote 배열의 길이만큼 난수를 확장 ex) 0~9
Math.floor(): 소수점 이하를 버려 정수로 만듦
이는 즉 quote 배열의 0~9번째 요소를 랜덤하게 출력함
*/
const todaysQuote = (quotes[Math.floor(Math.random()* quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
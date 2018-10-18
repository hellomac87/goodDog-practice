const gameState = {
  userInput: [],
  question: [],
  strike: 0,
  ball: 0,
}

// *** 화면 그리는 함수
function drawInning() {
  const myInning = `
  <li>
    <div class="wrap">
      <input type="text" value="${gameState.userInput[0]}" disabled/>
      <input type="text" value="${gameState.userInput[1]}" disabled/>
      <input type="text" value="${gameState.userInput[2]}" disabled/>
    </div>
    <div class="result">
      ${gameState.ball}ball, ${gameState.strike}strike
    </div>
  </li>
  `
  document.querySelector('.inning').insertAdjacentHTML('beforeend', myInning);
}
// *** 상태를 핸들링하는 함수

// 초기화 함수
function init() {

  // 문제 배열 생성 : question 배열에 0 ~ 9 까지 랜덤 생성된 중복없는 숫자를 생성하여 추가한다.
  gameState.question = [];
  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * 9);
    if (gameState.question.includes(number)) {
      i--;
    } else {
      gameState.question.push(number);
    }
  }

  // 유저 입력 배열 초기화하기 : 유저 입력 배열을 초기화한다.(빈 상태로 만든다.)
  gameState.userInput = [];

  document.querySelector('.inning').innerHTML = null;
  document.querySelector('.input-form').reset();

  // TODO : dom 확인용 나중에 지우자 : 테스트를 위해 html 에 뿌려준다.
  document.getElementById('question').innerHTML = `${gameState.question}`
}

// reset 버튼 눌렀을 때
document.getElementById('btnReset').addEventListener('click', (e) => {
  e.preventDefault(); // 기존의 submit 이벤트를 막는다.
  document.querySelector('.input-form').reset(); // form 엘리먼트 내, 요소들의 입력값을 초기화한다.
});

// 유저 입력 이벤트
document.querySelectorAll('.input-users').forEach((inputUser, index) => {
  // 각 유저 입력 input 요소에 이벤트를 input 이벤트를 추가한다.
  inputUser.addEventListener('input', (e) => {
    // input 요소에 입력이 발생하면 다음 input 엘리먼트로 포커스한다.
    inputUser.nextElementSibling.focus();
  });
});

// 유저 form submit event
document.querySelector('.input-form').addEventListener('submit', (e) => {
  const elements = e.target.elements;
  // form 의 기본 submit 동작은 막는다
  e.preventDefault();

  elements.inputUsers.forEach(item => {
    // 사용자 입력 상태 업데이트 : 입력되는 문자열을 숫자로 변환 한뒤 userInput 배열에 넣기
    gameState.userInput.push(parseInt(item.value));
  });
  // 로직 확인하기
  isStrike();
  //

  // 현재 상태로 화면 그리기
  drawInning();

  if (gameState.strike === 3) {
    alert('삼진');
    init();
  }
  if (document.querySelectorAll('.inning li').length === 9) {
    alert('end')
  }
  console.log()
  // 화면 그린 후 유저배열 지우기
  gameState.userInput = [];
  gameState.strike = 0;
  gameState.ball = 0;

});

// *** logic

function isStrike() {
  console.log(gameState.question);
  console.log(gameState.userInput);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j && gameState.question[i] === gameState.userInput[j]) {
        gameState.strike++;
      }
      if (i !== j && gameState.question[i] === gameState.userInput[j]) {
        gameState.ball++;
      }
    }
  }
  console.log(`${gameState.strike} strike`);
  console.log(`${gameState.ball} ball`);

}

init();


/* logic
const arr = [1, 2, 3];
let answer = [0, 1, 8];

let strike = 0;
let ball = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i === j && arr[i] === answer[j]) {
      strike++;
    }
    if (i !== j && arr[i] === answer[j]) {
      ball++;
    }
  }
}

console.log(`${strike} strike`);
console.log(`${ball} ball`);
*/

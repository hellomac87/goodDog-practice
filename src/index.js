const gameState = {
  userInput: [],
  question: [],
  strike: 0,
  ball: 0,
}
// 초기화 함수
function init() {
  // 문제 배열 만들기
  gameState.question = [];
  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * 9).toString();
    if (gameState.question.includes(number)) {
      i--;
    } else {
      gameState.question.push(number);
    }
  }
  // 유저 배열 초기화하기
  gameState.userInput = [];
  // TODO : dom 확인용 나중에 지우자
  document.getElementById('question').innerHTML = `${gameState.question}`
}

// *** 화면 그리는 함수
function drawInning() {
  console.log('drawInning');
}
// *** 상태를 핸들링하는 함수

// reset 버튼 눌렀을 때
document.getElementById('btnReset').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.input-form').reset();
});

// 유저 입력 이벤트
document.querySelectorAll('.input-users').forEach((inputUser, index) => {
  inputUser.addEventListener('input', (e) => {
    inputUser.nextElementSibling.focus();
  });
});

// 유저 form submit event
document.querySelector('.input-form').addEventListener('submit', (e) => {
  const elements = e.target.elements;
  // form 의 기본 submit 동작은 막는다
  e.preventDefault();

  elements.inputUsers.forEach(item => {
    gameState.userInput.push(item.value); // 사용자 입력 상태 업데이트
  });
  // 로직 확인하기
  logic();
  // 확인 후 유저배열 지우기
  gameState.userInput = [];
  // 현재 상태로 화면 그리기
  drawInning();
});

// *** logic

function logic() {
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
  gameState.strike = 0;
  gameState.ball = 0;
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

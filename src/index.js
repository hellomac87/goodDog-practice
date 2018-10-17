let userInput = [];

// 유저 입력 이벤트
document.querySelectorAll('.input-users').forEach((inputUser, index) => {
  inputUser.addEventListener('input', (e) => {
    inputUser.nextElementSibling.focus();
  });
});

// 유저 form submit event
document.querySelector('.input-form').addEventListener('submit', (e) => {

});


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

'use strict';

let score = 20;
let highscore = 0;

const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const sendMessageDom = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let number = randomNumber();
console.log(number);
setScore(score);

document.querySelector('.again').addEventListener('click', function () {
  number = randomNumber();
  console.log(number);
  score = 20;
  setScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const inputGuess = Number(document.querySelector('.guess').value);

  //Si el usuario no ha escrito nada
  if (!inputGuess && inputGuess === 0) {
    sendMessageDom('Por favor escribe un numero!!');
  } else {
    if (inputGuess < number || inputGuess > number) {
      score--;
      setScore(score);
      if (inputGuess < number) sendMessageDom('Its too low');
      if (inputGuess > number) sendMessageDom('Its too high');
    } else {
      if (score > highscore) highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const inputGuess = Number(document.querySelector('.guess').value);

  //Si el usuario no ha escrito nada
  if (!inputGuess) {
    document.querySelector('.message').textContent =
      'Por favor escribe un numero!!';
  } else {
    if (inputGuess < number || inputGuess > number) {
      score--;
      document.querySelector('.score').textContent = score;
      if (inputGuess < number)
        document.querySelector('.message').textContent = 'Its too low';
      if (inputGuess > number)
        document.querySelector('.message').textContent = 'Its too high';
    } else {
      if (score > highscore) highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

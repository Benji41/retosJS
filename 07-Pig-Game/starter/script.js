'use strict';
const eldice = document.querySelector('.dice');
const elbtnRoll = document.querySelector('.btn--roll');
const elbtnNew = document.querySelector('.btn--new');
const elbtnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let scores, currentScore, diceNumber, activePlayer;

const randomNumber = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const reset = function () {
  currentScore = 0;
  scores = [0, 0];
  diceNumber = 0;
  activePlayer = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
};

reset();
elbtnNew.addEventListener('click', function () {
  reset();
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 1;

  player1.classList.add('player--active');
  elbtnHold.classList.remove('hidden');
  elbtnRoll.classList.remove('hidden');
  eldice.classList.remove('hidden');
});

elbtnRoll.addEventListener('click', function () {
  diceNumber = randomNumber();
  eldice.src = `dice-${diceNumber}.png`;
  currentScore += diceNumber;
  //en luegar de utilizar queryselector, consulto el DOM por id
  //el uso del template string para consultas  dinamicas
  const rollScore = document.getElementById(`current--${activePlayer}`);
  if (diceNumber != 1) {
    elbtnHold.classList.remove('hidden');
    rollScore.textContent = currentScore;
  } else {
    currentScore = 0;
    rollScore.textContent = currentScore;
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    elbtnHold.classList.add('hidden');
    //quita  la clase al elemento que lo tenga de css y  de lo contrario lo agrega
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});

elbtnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    elbtnHold.classList.add('hidden');
    elbtnRoll.classList.add('hidden');
    eldice.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    activePlayer = !activePlayer ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }

  currentScore = 0;
});

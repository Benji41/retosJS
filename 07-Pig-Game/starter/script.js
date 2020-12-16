'use strict';
const eldice = document.querySelector('.dice');
const elbtnRoll = document.querySelector('.btn--roll');
const elbtnNew = document.querySelector('.btn--new');
const elbtnHold = document.querySelector('.btn--hold');
//en luegar de utilizar queryselector, consulto el DOM por id
const elscore0 = document.getElementById('score--0');
const elscore1 = document.getElementById('score--1');
const elcurrentScore0 = document.getElementById('current--0');
const elcurrentScore1 = document.getElementById('current--1');
const elplayer0 = document.querySelector('.player--0');
const elplayer1 = document.querySelector('.player--1');

let activePlayer = 0;
let score0 = 0;
let score1 = 0;
let currentScore0 = 0;
let currentScore1 = 0;
let diceNumber = 0;

const randomNumber = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const reset = function () {
  score0 = 0;
  score1 = 0;
  currentScore0 = 0;
  currentScore1 = 0;
  elscore0.textContent = score0;
  elscore1.textContent = score1;
  elcurrentScore0.textContent = currentScore0;
  elcurrentScore1.textContent = currentScore1;
};

reset();
elbtnNew.addEventListener('click', function () {
  reset();
  activePlayer = 1;
});

elbtnRoll.addEventListener('click', function () {
  diceNumber = randomNumber();
  eldice.src = `dice-${diceNumber}.png`;
  eldice.classList.remove('hidden');

  if (diceNumber != 1) {
    elbtnHold.classList.remove('hidden');
    if (activePlayer === 0) {
      currentScore0 += diceNumber;
      elcurrentScore0.textContent = currentScore0;
    } else {
      currentScore1 += diceNumber;
      elcurrentScore1.textContent = currentScore1;
    }
  } else {
    elbtnHold.classList.add('hidden');
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
  }
});

elbtnHold.addEventListener('click', function () {
  if (activePlayer === 0) {
    score0 += currentScore0;
    elscore0.textContent = score0;
    if (score0 >= 100) {
      console.log(`Gano el jugador${activePlayer} con ${score0}`);
    } else {
      console.log('entro a cambiar jugador con el hold 0');
      activePlayer = 1;
    }
  } else {
    score1 += currentScore1;
    elscore1.textContent = score1;
    if (score1 >= 100) {
      console.log(`Gano el jugador${activePlayer} con ${score1}`);
    } else {
      activePlayer = 0;
    }
  }
});

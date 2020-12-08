'use strict';
const mMark = 78;
const mJohn = 92;
const hMark = 1.69;
const hJohn = 1.95;

const BMIMark = mMark / hMark ** 2;
const BMIJohn = mJohn / hJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;
console.log(
  markHigherBMI
    ? `Mark tiene un mayor BMI de ${BMIMark} a comparacion de ${BMIJohn}`
    : `John tiene un mayor BMI de ${BMIJohn} a comparacion de ${BMIMark}`
);

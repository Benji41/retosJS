'use strict';
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = calcAverage(200, 100, 100);
const avgKoalas = calcAverage(65, 54, 49);
const checkWinner = function (avgK, avgD) {
  if (avgK >= avgD * 2) {
    console.log(`Koalas win by (${avgKoalas} vs ${avgDolphins})`);
  } else {
    if (avgD >= avgK * 2) {
      console.log(`Dolphins win by (${avgDolphins} vs ${avgKoalas})`);
    } else {
      console.log(`no one won`);
    }
  }
};
checkWinner(avgKoalas, avgDolphins);

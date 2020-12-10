'use strict';
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  tips.push(tip);
  totals.push(tip + bill);
};
for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
}
console.log(bills, tips, totals);

const calcAvg = function (arr) {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc = acc + arr[i];
  }
  return acc / arr.length;
};
console.log(
  `Average of bills: ${calcAvg(bills)}, average of tips: ${calcAvg(
    tips
  )} and the average of totals: ${calcAvg(totals)}`
);

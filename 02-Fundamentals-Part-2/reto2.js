'use strict';
const bills = [125, 555, 44];
const tips = [];
const total = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  total[i] = tips[i] + bills[i];
}
console.log(bills);
console.log(tips);
console.log(total);

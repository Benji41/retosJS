'use strict';
const bill = 275;
//let tip = 0;
//bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`Bill: ${bill} Tip:${tip} Total:${bill + tip}`);

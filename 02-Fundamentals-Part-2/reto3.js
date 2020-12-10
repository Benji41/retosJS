'use strict';
const MarkMiller = {
  fullname: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    //aqui se crea un atributo dentro de la funcion
    return (this.bmi = this.mass / this.height ** 2);
  },
};
const JohnSmith = {
  fullname: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};
MarkMiller.calcBMI();
JohnSmith.calcBMI();
console.log(
  MarkMiller.bmi > JohnSmith.bmi
    ? `${MarkMiller.fullname} BMI is higher than John's (${MarkMiller.bmi} vs ${JohnSmith.bmi})`
    : `${JohnSmith.fullname} BMI is higher than Mark's (${JohnSmith.bmi} vs ${MarkMiller.bmi})`
);

const score = 400
console.log(score);                //400

const balance = new Number(100)
console.log(balance);                 //[Number: 100]

console.log(balance.toString().length);          //3
console.log(balance.toFixed(2));                 //100.00

const otherNumber = 23.8976
console.log(otherNumber.toPrecision(3));             //23.9   // Must be in the range 1 - 21, inclusive.


const number = 123.654
console.log(number.toPrecision(3));               //124

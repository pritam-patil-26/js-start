const score = 400
// console.log(score);                //400

const balance = new Number(100)
// console.log(balance);                 //[Number: 100]

// console.log(balance.toString().length);          //3
// console.log(balance.toFixed(2));                 //100.00

const otherNumber = 23.8976
// console.log(otherNumber.toPrecision(3));             //23.9   // Must be in the range 1 - 21, inclusive.


const number = 123.654
// console.log(number.toPrecision(3));               //124

const numberOne = 1234.876
// console.log(numberOne.toPrecision(3));             //1.23e+3

const numberZeros = 1000000
// console.log(numberZeros.toLocaleString());          //1,000,000
// console.log(numberZeros.toLocaleString('en-IN'));   //10,00,000

//........................math..................

console.log(Math)
console.log(Math.abs(-4));            //4
console.log(Math.round(4.6));         //5
console.log(Math.ceil(4.1));          //5
console.log(Math.floor(4.8));         //4
console.log(Math.min(4,3,6,5));       //3
console.log(Math.max(4,6,8,2));       //8

console.log(Math.random());           //0.5044428770535458      //any value between 0 to 1
console.log(Math.random()*10);
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min +1)) + min);

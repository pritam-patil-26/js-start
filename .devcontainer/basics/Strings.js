let myname = "pritampatil"
let anothername = myname
// console.log(anothername)      //pritampatil

anothername = "anjalipatil"
// console.log(myname);           //pritampatil
// console.log(anothername);      //anjalipatil

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne
//console.log(userOne);           //email : "user@gmail.com", upi : "user@ybl"
userTwo.email = "prit@gmail.com"
//console.log(userTwo.email);      //prit@email.com


//STRINGS

const name = "pritam"
const age = 21
// console.log(name + age);
// console.log(name + age + "_value");
//console.log(`hello my name is ${name} and my age is ${age}`);        //hello my name is pritam and my age is 21
const gameName = new String (`pritam`)
// console.log(gameName[0]);           //p
// console.log(gameName.__proto__);      //{}

console.log(gameName.length);    //6
console.log(gameName.toUpperCase());     //PRITAM
console.log(gameName.charAt(2));      //i
console.log(gameName.indexOf('t'));       //3

const newString = gameName.substring(0,4)       //prit
console.log(newString);
const anotherString = gameName.slice(0,4)
console.log(anotherString);         //prit

const newStringOne = "  pratham  "
console.log(newStringOne);               //  pratham
console.log(newStringOne.trim());        //pratham     

const url = "https://prit.com/pritam%20patil"
console.log(url.replace('%20','-'))      //https://prit.com/pritam-patil
console.log(url.includes('pritam'));     //true

const myyName = new String('prit-patil-26')
console.log(myyName.split('-'));

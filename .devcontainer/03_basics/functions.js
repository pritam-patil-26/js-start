
function saymyname() {
    console.log("p");
    console.log("r");
    console.log("i");
    console.log("t");
}
//saymyname()

// function addTwoNumbers (number1,number2) {
//     console.log(number1 + number2);
// }
// // addTwoNumbers(2,3)    //5
// const result = addTwoNumbers(2,3)    //5
// console.log("result :", result);    //result : undefined

function addTwoNumbers (number1,number2) {

    let result = number1 + number2
    return result
}
const result = addTwoNumbers(3,5)
console.log("result:",result);       //result: 8

function loginUserMessage(username = "sam"){
    if(username === undefined){
        // console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("pritam"))    //pritam just logged in
// console.log(loginUserMessage());   //sam just logged in

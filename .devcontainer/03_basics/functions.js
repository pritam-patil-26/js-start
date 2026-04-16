
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
// console.log("result:",result);       //result: 8

function loginUserMessage(username = "sam"){
    if(username === undefined){
        // console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("pritam"))    //pritam just logged in
// console.log(loginUserMessage());   //sam just logged in


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,600))

const user = {
   username: "prit",
   price: 2000
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 333
})

const myNewArray = [200,400,100,600]
 function returnsecondvalue(getArray){
    return getArray[1]
 }
console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([200,400,100,600]));

 
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
console.log(userTwo.email);      //prit@email.com

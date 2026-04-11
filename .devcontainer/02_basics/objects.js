const mySym = Symbol("key")

const JsUser ={
    name: "Pritam",
    "full name" : "pritam patil",
    // mySym : "mykey1",          // not hte correct way
     [mySym]: "mykey1", 
    age: 21,
    location: "kolhapur",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"]
}

// console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);           //String

console.log(JsUser[mySym]);

JsUser.email = "xyz@gmail.com"
Object.freeze(JsUser)
JsUser.email = "lmn@gmail.com"
console.log(JsUser);

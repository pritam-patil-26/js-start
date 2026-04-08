let mydate = new Date()
console.log(mydate);             //2026-04-08T15:44:00.571Z
console.log(mydate.toString());      ///Wed Apr 08 2026 15:44:48 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString());    //Wed Apr 08 2026
console.log(mydate.toISOString());    //2026-04-08T15:47:49.005Z
console.log(mydate.toJSON());         //2026-04-08T15:47:49.005Z
console.log(mydate.toLocaleDateString());     //4/8/2026
console.log(mydate.toLocaleString());          //4/8/2026, 3:47:49 PM
console.log(mydate.toLocaleTimeString());      //3:47:49 PM
console.log(typeof mydate);       //object

// let myCreatedDate = new Date(2024,0,20)
// console.log(myCreatedDate.toDateString());       //Wed Apr 08 2026

// let myCreatedDate = new Date(2024,0,20,8,6)
// console.log(myCreatedDate.toLocaleString());        //1/20/2024, 8:06:00 AM

let myCreatedDate = new Date("2024-10-26")
// console.log(myCreatedDate.toLocaleString());              //10/26/2024, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp);                    //1775664234703
console.log(myCreatedDate.getTime());        //1729900800000


const myarr = [0,1,2,3,4,5]
// console.log(myarr);
// console.log(myarr[1]);

// Array methods
// myarr.push(7)
// myarr.push(6)
// console.log(myarr);
// myarr.pop()
// console.log(myarr)
// 
// myarr.unshift(9)
// console.log(myarr);

// myarr.shift()
// console.log(myarr);


// console.log(myarr.includes(4));
// console.log(myarr.indexOf(5));

// const newarr = myarr.join()
// console.log(myarr);
// console.log(newarr);

// console.log(typeof(newarr));

// console.log("A" , myarr);

const mya1 = myarr.slice(1,3)
// console.log(mya1)
// console.log("B" , myarr);

const mya2 = myarr.splice(1,3)
// console.log(mya2);
// console.log("c" , myarr);

//...........................+++++++++++..........................

const marval_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros= ["superman" , "flash" , "batsman"]

marval_heros.push(dc_heros)
// const all_Heros = marval_heros.concat(dc_heros)
// console.log(all_Heros);

const all_new_hero = [...marval_heros,...dc_heros]
// console.log(all_new_hero);/

console.log(Array.isArray("pritam"));
console.log(Array.from("pritam"));
console.log(Array.from({name: "pritam"}));

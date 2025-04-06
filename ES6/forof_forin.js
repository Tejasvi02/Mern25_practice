//Create an example of your own for -
// 1. ForOF Loop
// 2. ForIn loop

const { userInfo } = require("os");

//for of is generally used for iteratable - Array, String, Map etc
//gives values directly, no need to access with the index
let fruits = ["Apple", "banana","orange"];
for (let fruit of fruits){
    console.log(fruit)
}

//for in loop is used for objects/ non iterable generally
//it gives the index while iterating
for(let fruit in fruits){
    console.log(fruit) //prints the index
    console.log(fruits[fruit]) //to access element
}


let cars ={brand: "Ford", year: 2018, color: "blue"}
for(let car in cars){
    console.log(car) //prints key
    console.log(cars[car]) //prints value
}

//can't use for of for object -- TypeError: cars is not iterable
// for(let car of cars){
//     console.log(car);
// }


//in js array is also object so we can add key values to it
fruits.x ="Strawberry"
console.log(fruits.x)


//for exporting into global variable in node_bsc
module.exports = cars;
 globalThis.userInfo = {
    name: "Tej",
    session: "Nodejs"
 }
"use strict";  //this lets all the JS code to run in newer version 


// alert(17 + 3) this will show error as we are running the code in nodejs and not in the browser


// console.log("Garvit"); console.log(4 + 4) but this is not good as it is not properly readable, thus the correct way is

// console.log(4 + 3)
// console.log("Garvit")

// --------------------------------------------Some More Details From Interview Perspective----------------------------

// datatypes are actually of only 2 types and are then subcategorize into them
// its two types are primitive and non premitive it is based on how data is saved into the memory and its access


// PREMITIVE(7 types)
// strings, number, boolean, symbol, bigint, null, undefined

// REFERENCE(3 types)
// array, object, function
// array is same as lists in python and object is same as dictionary in python


let Id = Symbol("123")
// let anotherId = Symbol("123")
// console.log(Id == anotherId);
// arrays
let classes = ["First", "Second", "Third"];
// objects
let myObj  = {Name: "Garvit", age: 17, standard: "12th"}


let myfunc = function(){
    // console.log("Hello, World!");  
}
let bignumber = 20323203n


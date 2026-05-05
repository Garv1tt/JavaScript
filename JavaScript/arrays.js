// VERY IMPORTANT

const Myarray = [1, 2, 3, 4, 5, 6]
// console.log(Myarray[4])
// another way of declaring a array

const newarray = new Array(1,2,3,4,5,6)
// console.log(newarray.length);

// METHODS

newarray.push(7)
// console.log(newarray);
// to remove last value of array
newarray.pop()
// console.log(newarray);
// to add any number on zero index
newarray.unshift(0)
// console.log(newarray); 
// to remove the number from zero index
newarray.shift()
// console.log(newarray);
//  some operations
// console.log(newarray.includes(5));
// console.log(newarray.indexOf(3));

// to change the typeof array and binding them we use join function

myarr = newarray.join()
// console.log(myarr);
// console.log(newarray);
// slice and splice
//  console.log("A", newarray);
const myn1 = newarray.slice(1,4)
// console.log("B", newarray);
// console.log(myn1);
const myn2 = newarray.splice(1,4)
// console.log("C", newarray);
// console.log(myn2);
  
// -----------------Part-2-----------------

const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9,10]

// array1.push(array2)
// console.log(array1);
// console.log(array1[5]);
// console.log(array1[5][2]);

// another better method

 const mergedarray = array1.concat(array2)
// console.log(mergedarray);

// same as concat but more preffered

const mergedarray2 = [...array1, ...array2]
// console.log(mergedarray2);

const array3 = [1,2,3,[4,5],6,[7,8,[9,10,11]]]
const flatarray = array3.flat(Infinity) 
// console.log(array3);
// console.log(flatarray);
// to check if the output is array or not we use isarray function

const test = Array.isArray("Garvit")
// console.log(test);
// to convert any datatype into array
const test1 = Array.from("Garvit")
// console.log(test1);
//  if we try to use from in ke value pair then it will give an empty array until it is not specified if we want to convert key to array or the values
const test2 = Array.from({name: "Garvit"})
// console.log(test2);
// to make a array using varibles
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

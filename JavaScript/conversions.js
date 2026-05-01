score = "45abc"

let number = Number(score)
// console.log(typeof number);
// console.log(number)
// NaN means not a number
// in booelean true means one and false means zero
// null is zero and undefined is NaN
// the problem is that in type of score it shows number whether it is true or not just lke in the case above
// like above where we used Number as a function we can also use String,Booelean et and mostly al the datatypes 


let isloggedin1 = 0
let isloggedin2 = 1
let isloggedin3 = ""
let isloggedin4 = "Hello!"

booleanloggedin1 = Boolean(isloggedin1)
booleanloggedin2 = Boolean(isloggedin2)
booleanloggedin3 = Boolean(isloggedin3)
booleanloggedin4 = Boolean(isloggedin4)

// console.table([booleanloggedin1, booleanloggedin2, booleanloggedin3, booleanloggedin4])

let somenumber = 33
stringnumber = String(somenumber)
// console.log(stringnumber);
// console.log(typeof stringnumber);


// ***********************************Operations**********************************************************



// console.log(2%3)
// we can also add two different string variables 
let str1 = "Hello,"
let str2 = " World!"
let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2);
// this will show logical error as in this case 1 is treated as a string and 2 as a number and they cannot be added if they are not if same datatype thus the output will be 12 and not 3
// MAGICCC
// as per my observation if the first digit is string then it treates the whole braket as a string if a number then it adds all the number with themselves and concatenate with the string but if both the number has a string in between then they dont add up and only concatenate

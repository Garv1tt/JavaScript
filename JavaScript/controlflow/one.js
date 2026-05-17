// basic if else 

// if(condtion){

// } syntax of (if) the paranthesis enclose a condition and if it is true then only thr code will run for eg

// if(2==="2"){
//     console.log("executed");
    
// } it will not be printed as when there are === lhs should have same datatype and same value as the rhs thus it did not print as one is int and another is string

// if(2=="2"){
//     console.log("executed");
    
// } this prints as == only cchecks the value and do not care abt the datatype.

// simple program 
// const temperature = 45
// if(temperature > 50){
//     console.log("temperature is greater than 50");
// }
// else{
//     console.log(`temperature is less than 50 and is: ${temperature} `);
    
// }

// const balance = 250
// if(balance < 500 && balance > 400){
//     console.log("less than 500 and more than 400");   
// }
// else if(balance < 400 && balance > 300){
//     console.log("less than 400 and more than 300");   
// }
// else if(balance < 300 && balance > 200){
//     console.log("less than 300 and more than 200");   
// }
// else if(balance < 200 && balance > 100){
//     console.log("less than 200 and more than 100");   
// }
// else if(balance < 100 && balance > 0){
//     console.log("less than 100 and more than 0");   
// }
// else{
//     console.log("amount more than 500");
    
// }

// NOTE->for every conditions to be true we use && and if everyone is true then only the code runs but in or we use || in which if any one ofthe following conditions are true the code will run
// there is also an operator called nullish coalescing operator(??) which deals in null and undefined values.for eg if the computer has to choose between null,undefined and a value then it will give the number as a result to avoid errors

let val1;
// val1 = undefined ?? 10
// val1 = null ?? 10
val1 = null ?? undefined
// console.log(val1);
// terniary operator
//  syntax --> condition ? true: false

const icprice = 100
icprice >=800 ? console.log("more than 80") : console.log("less than 80");


// while and dowhile loop


// index = 0
// while (index <=10) {
//     console.log(`Value of i is ${index}`);
//     index = index + 2
// }

// let myArray = ['flash','batman','superman','spiderman','ironman']
// arr = 0
// while (arr < myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1
    
    
// }
// let index = 1
// do {
//     console.log(`value is: ${index}`);
//     index++
    
// } while (index <= 10);
// the only difference between while and do while is that while takes the condition first and only runs if the condition is true
// but dowhile runs atleast one time without caring about the condition its two egs are given beloww
// first when condition is true

// let index = 1
// do {
//     console.log(`value is: ${index}`);
//     index++
    
// } while (index <= 10);

// Output is:
// value is: 1
// value is: 2
// value is: 3
// value is: 4
// value is: 5
// value is: 6
// value is: 7
// value is: 8
// value is: 9
// value is: 10


// second when codition is not true


let index = 11
do {
    console.log(`value is: ${index}`);
    index++
    
} while (index <= 10);

// Output is: 
// value is: 11
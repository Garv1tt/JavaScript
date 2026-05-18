// for loop with break and continue

// basic for loop syntax
// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if(i==5){
//         console.log("you are at the half way");
        
//     }
//   console.log(element);
    
// }
//  gives the table from 0 to 10
// to print all the elements inside a array

// let myArray = ['flash','batman','superman','spiderman','ironman']
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }


// for (let i = 0; i <= 20; i++) {
//     if(i==10){
//         console.log("10 is detected now the code will break");
//         break;
        
//     }
//     console.log(`value of i is: ${i}` );
// }

for (let i = 0; i <= 20; i++) {
    if(i==10){
        console.log("10 is detected now the code will continue except 10");
        continue;
        
    }
    console.log(`value of i is: ${i}` );
}
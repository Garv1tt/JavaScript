function foreg(){
    console.log("Hello,")
    console.log("World!")
}
// foreg()

function addition(number1,number2){
    console.log(number1 + number2);
    
}

const result = addition(3,4)
// console.log(result); this will give the answer undefined thats why return statemnent is preferred more 

// addition(45,56)
// addition(45, "3") concatenation
// addition(3,"a") same as above 

// through return statement

function subtraction(numbr1, numbr2) {
 let result = numbr1 - numbr2
 return result
}
const result = subtraction(9,7)
// console.log(result);
// anything after return is not readed

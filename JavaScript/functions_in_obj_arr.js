// to add multiple values in a single variable 
function test(...num1){
    return num1;
} 
// console.log(test(200,400,600,800,1000));
// ... ye 3 dots saari values ek hi variable mei array ki trh store krleta hai jiske baad hum usme operations bhi kr skte hai apni marzi ka 

const user = {
    username: "Garvit",
    age: 17
}
 function checkusername(anyobject){
    // console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
    
 }
 checkusername(user)
//  for array

const array = [200,400,600,800,1000]
function myarray(getarray){
    return getarray[1];
}
console.log(myarray(array));

// object literals
// most important is to when caling add a habit of calling it with square brackets nd not . 
const mySym = Symbol("key1")
const Juser = {
    name: "Garvit",
    "Full name": "Garvit Jain",
    Age: 17,
    [mySym]: "ans1",
    email:"xyz@gmail.com",
    isloggedin: false,
}
// to retract any value from the user we have 2 option
// 1st
// console.log(Juser.email);
// but if our key is in enclosed in quotations then the above would give an error thus we prefer 2nd option
// 2nd
// console.log(Juser["Full name"]);
// if to use symbol as key then we do
// console.log(Juser.mySym);
// but above has one problem that it leads to change of datatype of symbol ie it is now a string to prevent symbol from changing its datatype we enclosed the symbol variable and store it in square brackets
// console.log(Juser[mySym]);
// to change any notation in object we do
Juser.email = "garvit@gmail.com"
// console.log(Juser.email);
// but if we want to lock our object ie no one can change any value then we use function freeze
// Object.freeze(Juser)
Juser.email = "garvit@microsoft.com"
// console.log(Juser.email);
// from above we can see that the email did not change and remained as it is
// console.log(Juser);
// after printing the whole object we can see that it is showing that key1 is ansymbol which is only because of the square brackets if we remove them then it will be considered as an string

 Juser.greeting = function(){
    // console.log("Hello, World!");
    
 }
 console.log(Juser.greeting());
//  console.log(Juser.greeting); this is important
 
 Juser.greeting2 = function(){
    // console.log(`Hello JS User, ${this["Full name"]} of age ${this.Age}`);
 }
//  console.log(Juser.greeting2());
//  ----------------Part-2------------
// singleton or declarations through constructor
// two ways to eclare an object
// const tinder = new Object({name: "Garvit"})1 it is a singleton object
// const tinder = {
//     name: "Garvit"
// }2 it is not a singleton object

const tinderuser = {}
// we can also do nesting of objects
tinderuser.id = "123"
tinderuser.name = "Harsh"
tinderuser.isloggedin = false
// console.log(tinderuser);
const regularuser = {
  email: "gmail.com",
  name: {
    fullusername: {
        firstname: "Garvit",
        lastname: "Jain"
    }
  }
}
// console.log(regularuser.name.fullusername.firstname);
const obj1 = {1: "a",2: "b", 3:"c"}
const obj2 = {4: "d",5: "e", 6: "f"}
const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);
// but there is also a preffered way
const obj4 = Object.assign({7: "g",8: "h"}, obj1, obj2)
// console.log(obj4);
// the value of obj3 and obj4 will be same but we should use obj4 method as it it more logically correct and easy  to add more values in the empty object
// but the best method is spread
const obj5  = {...obj1, ...obj2}
// console.log(obj5);
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// interesting is that the keys and values come in array thus it easy to use loops or if else conditions on them
// another interesting function is enteries which makes an array of a array of key value pair
// console.log(Object.entries(tinderuser));
// to check if a value if present inside the object or not we use hasownproperty function

console.log(tinderuser.hasOwnProperty('email')
);
console.log(tinderuser.hasOwnProperty('isloggedin'));

let Myheroes = ["thor","spiderman"]
let heroPower = {
    thor: "Hammer",
    Spiderman: "Webs",

    GetSpiderPower: function(){
        console.log(`Spiderman's Power is: ${this.Spiderman}`);
        
    }
}
Object.prototype.garvit = function(){
    console.log(`Garvit is present in all objects`);
}
Array.prototype.Jain = function(){
    console.log(`Jain is present in all arrays`);
    
}
// heroPower.Jain()

// Inheritance
//  1st Old Approach

const User = {
    name: "Garvit",
    Email: "Garvit@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingAssistant = {
    isAvailable: false
}
const TASupport = {
    Assignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingAssistant
}
Teacher.__proto__ = User

//  2nd New Approach

Object.setPrototypeOf(TeachingAssistant, Teacher)

let Username = "Garvit.      "
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True Length of String is: ${this.trim().length}`); 
}
Username.trueLength()
"Garvit Jain".trueLength()
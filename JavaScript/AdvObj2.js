const test = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI)
// console.log(test);

const Obj = {
    name: "Garvit",
    Age: 17,
    Occupation: "Student",
    VotingRights: function(){
        console.log("Voting Rights should be at the age of 18")
    }
}
const test2 = console.log(Object.getOwnPropertyDescriptor(Obj, "name"))
// console.log(test2);
Object.defineProperty(Obj, "Age", {
    enumerable: false,
    // writable: false
})
// console.log(Object.getOwnPropertyDescriptor(Obj, "name"))
for (let [key, value] of Object.entries(Obj)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`)
    }
}
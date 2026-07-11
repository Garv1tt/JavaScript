
// without class we would've done like this
//  ---->

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }
// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.LowCapsUsername = function(){
//     return `${this.username.toLowerCase()}`
// }
// const test2 = new User("AMAN","A@gmail.com","159")

// console.log(test2.encryptPassword());
// console.log(test2.LowCapsUsername());




class User{
    constructor(username, email, password){
            this.username = username;
            this.email = email;
            this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    CapsUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const test = new User("Garvit", "G@gmail.com", "123")
// console.log(test.encryptPassword());
// console.log(test.CapsUsername());




const User = {
    username: "Garvit",
    LoginCount: 5,
    signedIn: true,
    getUserDetails: function(){
        // console.log(`Username: ${this.username}`)
        // console.log(this);
        
    }
}
// console.log(User.username);
// console.log(User.getUserDetails());
function user(username, isLoggedIn, LoginCount){
    this.username = username,
    this.isLoggedIn = isLoggedIn,
    this.LoginCount = LoginCount

    return this
}
const User1 = new user("Garvit", true, 12)
const User2 = new user("Mardav", false, 10)

console.log(User1);
console.log(User2);
